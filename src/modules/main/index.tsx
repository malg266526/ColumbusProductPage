import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Hidden, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ProductList } from '../../components/ProductList';
import { MODULE_SM_SPACING, MODULE_SPACING } from '../../common/consts/styles';
import { Product } from '../../components/Product';

interface IProps {}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(MODULE_SPACING),

        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(MODULE_SM_SPACING),
            paddingTop: 0,
        },
    },
}));

export const Main: React.FC<IProps> = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Grid container>
                <Hidden smDown>
                    <Grid item xs={3}>
                        <ProductList />
                    </Grid>
                </Hidden>
                <Grid item xs={12} lg={9}>
                    <Product />
                </Grid>
            </Grid>
        </section>
    );
};
