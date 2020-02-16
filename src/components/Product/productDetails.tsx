import React, { useState } from 'react';
import {
    Button,
    FormControl,
    Select,
    Theme,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { IProduct } from '../../store/ProductsStore';
import { inject, observer } from 'mobx-react';
import { ICartStore } from '../../store/cartStore';

interface IProps {
    product: IProduct;
    cartStore?: ICartStore;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    oldPrice: {
        textDecoration: 'line-through',
    },
    variantsSelect: {
        minWidth: 50,

        [theme.breakpoints.up('md')]: {
            minWidth: 120,
        },
    },
}));

const ProductDetailsComp: React.FC<IProps> = props => {
    const classes = useStyles();
    const { product } = props;
    const [currentVariant, setCurrentVariant] = useState(product.variants[0]);

    const addToCart = () => {
        const { cartStore } = props;
        if (cartStore) {
            cartStore.addToCart(product);
        }
    };

    return (
        <div>
            <Grid container className={classes.root}>
                <Grid item xs={6} lg={4}>
                    <Typography variant="h2">
                        {product.newPrice} {product.currency}
                    </Typography>
                    <Typography variant="caption" className={classes.oldPrice}>
                        {product.oldPrice} {product.currency}
                    </Typography>
                </Grid>
                <Grid item xs={6} lg={4}>
                    <FormControl
                        variant="outlined"
                        className={classes.variantsSelect}
                    >
                        <Select
                            native
                            value={currentVariant}
                            onChange={(
                                event: React.ChangeEvent<{ value: unknown }>
                            ) =>
                                setCurrentVariant(event.target.value as string)
                            }
                        >
                            {product.variants &&
                                product.variants.map(variant => (
                                    <option key={variant} value={variant}>
                                        {variant}
                                    </option>
                                ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => addToCart()}
                    >
                        Buy
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export const ProductDetails = inject('cartStore')(observer(ProductDetailsComp));
