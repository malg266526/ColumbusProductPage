import React from 'react';
import { Button, Hidden, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import { inject, observer } from 'mobx-react';
import { ICartStore } from '../../store/cartStore';
import { FONT_SIZE, FONT_WEIGHT } from '../../common/consts/fonts';
import { IProduct } from '../../store/ProductsStore';
import logoImage from '../../assets/OfficeSupplies.png';

interface IProps {
    cartStore?: ICartStore;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',

        [theme.breakpoints.down('md')]: {
            justifyContent: 'space-between',
        },
    },
    cartIcon: {
        width: 60,
        height: 60,
        marginRight: theme.spacing(3),

        [theme.breakpoints.down('md')]: {
            marginRight: '-24px',
        },
    },
    menuIcon: {
        width: 60,
        height: 60,
    },
    totalCount: {
        fontSize: FONT_SIZE.BIG,
        fontWeight: FONT_WEIGHT.LIGHT,
        marginRight: theme.spacing(2),

        [theme.breakpoints.down('md')]: {
            fontWeight: FONT_WEIGHT.BOLD,
        },
    },
    totalCost: {
        fontSize: FONT_SIZE.BIG,
        marginRight: theme.spacing(3),
    },
    logo: {
        height: 30,
    },
}));

const ShoppingCartInfoComp: React.FC<IProps> = ({ cartStore }) => {
    const classes = useStyles();
    const { productsInCart, currency } = cartStore as ICartStore;

    const totalCount = productsInCart.length;
    const totalPrice = productsInCart.reduce(
        (prevValue: number, productB: IProduct) => {
            return prevValue + productB.newPrice;
        },
        0
    );

    return (
        <div className={classes.root}>
            <Hidden lgUp>
                <MenuIcon className={classes.menuIcon} color="secondary" />
                <img src={logoImage} className={classes.logo} alt="logo" />
            </Hidden>
            <ShoppingCartIcon className={classes.cartIcon} color="secondary" />
            <div className={classes.totalCount}>{totalCount} st</div>
            <Hidden mdDown>
                <div className={classes.totalCost}>
                    {totalPrice} {currency}
                </div>
                <Button variant="contained" color="secondary">
                    Check out
                </Button>
            </Hidden>
        </div>
    );
};

export const ShoppingCartInfo = inject('cartStore')(
    observer(ShoppingCartInfoComp)
);
