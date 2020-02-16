import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PhotosGallery } from '../PhotosGallery';

interface IProps {}

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}));

export const Product: React.FC<IProps> = () => {
    const classes = useStyles();

    const productName = 'Paper';

    return (
        <section className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <PhotosGallery productName={productName} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h1">{productName}</Typography>
                </Grid>
            </Grid>
        </section>
    );
};
