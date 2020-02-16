import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Hidden, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logoImage from '../../assets/OfficeSupplies.png';
import { ProductSearch } from '../../components/ProductSearch';
import { ShoppingCartInfo } from '../../components/ShoppingCartInfo';

interface IProps {}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        height: 100,
        alignItems: 'center',
        padding: theme.spacing(),
    },
    logo: {
        height: 70,
    },
}));

export const Header: React.FC<IProps> = () => {
    const classes = useStyles();
    return (
        <header className={classes.root}>
            <Grid container>
                <Grid item xs={8} md={4}>
                    <img src={logoImage} className={classes.logo} alt="logo" />
                </Grid>
                <Hidden smDown>
                    <Grid item xs={8} md={4}>
                        <ProductSearch />
                    </Grid>
                </Hidden>
                <Grid item xs={8} md={4}>
                    <ShoppingCartInfo />
                </Grid>
            </Grid>
        </header>
    );
};
