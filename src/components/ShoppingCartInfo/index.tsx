import React from 'react';
import { Button, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { inject, observer } from 'mobx-react';
import { ICartStore } from '../../store/cartStore';
import { FONT_SIZE, FONT_WEIGHT } from '../../common/consts/fonts';
import { IProduct } from '../../store/ProductsStore';

interface IProps {
    cartStore?: ICartStore;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    cartIcon: {
        width: 60,
        height: 60,
        marginRight: theme.spacing(3),
    },
    totalCount: {
        fontSize: FONT_SIZE.BIG,
        fontWeight: FONT_WEIGHT.LIGHT,
        marginRight: theme.spacing(2),
    },
    totalCost: {
        fontSize: FONT_SIZE.BIG,
        marginRight: theme.spacing(3),
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
            <ShoppingCartIcon className={classes.cartIcon} color="secondary" />
            <div className={classes.totalCount}>{totalCount} st</div>
            <div className={classes.totalCost}>
                {totalPrice} {currency}
            </div>
            <Button type="submit" variant="contained" color="secondary">
                Check out
            </Button>
        </div>
    );
};

export const ShoppingCartInfo = inject('cartStore')(
    observer(ShoppingCartInfoComp)
);
