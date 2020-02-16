import React from 'react';
import { Theme, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { inject, observer } from 'mobx-react';
import { ICartStore } from '../../store/cartStore';
import { IProduct } from '../../store/ProductsStore';
import { FONT_SIZE, FONT_WEIGHT } from '../../common/consts/fonts';

interface IProps {
    cartStore?: ICartStore;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    cartIcon: {
        width: 60,
        height: 60,
    },
    totalCount: {
        fontSize: FONT_SIZE.BIG,
        fontWeight: FONT_WEIGHT.LIGHT,
    },
    totalCost: {
        fontSize: FONT_SIZE.BIG,
    },
}));

const ShoppingCartInfoComp: React.FC<IProps> = ({ cartStore }) => {
    const classes = useStyles();
    // const { productsInCart, currency } = cartStore;

    const currency = 'kr';
    const totalCount = 2; // productsInCart.length;
    const totalPrice = 500; //productsInCart.reduce((productA: IProduct, productB: IProduct) => { return productA.newPrice + productB.newPrice} );

    return (
        <div className={classes.root}>
            <ShoppingCartIcon className={classes.cartIcon} />
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
