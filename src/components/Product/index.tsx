import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PhotosGallery } from '../PhotosGallery';
import { inject, observer } from 'mobx-react';
import { IProductStore } from '../../store/ProductsStore';
import { ProductDetails } from './productDetails';
import { ProductDesc } from './productDescription';

interface IProps {
    productStore?: IProductStore;
}

const useStyles = makeStyles((theme: Theme) => ({
    details: {
        paddingLeft: theme.spacing(2),
    },
    description: {
        marginTop: theme.spacing(2),
    },
}));

const ProductComp: React.FC<IProps> = ({ productStore }) => {
    const classes = useStyles();

    if (!(productStore && productStore.currentProduct)) {
        return <Typography variant="h1">No product selected</Typography>;
    }

    const product = productStore.currentProduct;
    const productName = product.name;

    return (
        <section>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <PhotosGallery productName={productName} />
                </Grid>
                <Grid item xs={12} md={8} className={classes.details}>
                    <Typography variant="h1">{productName}</Typography>

                    <ProductDetails product={product} />

                    <ProductDesc description={product.description} />
                </Grid>
            </Grid>
        </section>
    );
};

export const Product = inject('productStore')(observer(ProductComp));
