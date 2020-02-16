import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Hidden, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PhotosGallery } from '../PhotosGallery';
import { inject, observer } from 'mobx-react';
import { IProductStore } from '../../store/ProductsStore';
import { ProductDetails } from './productDetails';
import { ProductDesc } from './productDescription';
import { InspirationGallery } from '../InspirationGallery';
import { MODULE_SM_SPACING } from '../../common/consts/styles';

interface IProps {
    productStore?: IProductStore;
}

const useStyles = makeStyles((theme: Theme) => ({
    details: {
        paddingLeft: theme.spacing(2),
        paddingBottom: 0,

        [theme.breakpoints.down('md')]: {
            paddingLeft: 0,
            paddingBottom: theme.spacing(MODULE_SM_SPACING),
        },
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
            <Grid container className={'h-product'}>
                <Hidden mdDown>
                    <Grid item xs={12} lg={4}>
                        <PhotosGallery productName={productName} />
                    </Grid>
                </Hidden>
                <Grid item xs={12} lg={8} className={classes.details}>
                    <Typography variant="h1" className={'p-name'}>
                        {productName}
                    </Typography>
                    <ProductDetails product={product} />
                    <Hidden lgUp>
                        <Grid item xs={12}>
                            <PhotosGallery productName={productName} />
                        </Grid>
                    </Hidden>
                    <ProductDesc description={product.description} />
                </Grid>
                <Grid item xs={12}>
                    <InspirationGallery />
                </Grid>
            </Grid>
        </section>
    );
};

export const Product = inject('productStore')(observer(ProductComp));
