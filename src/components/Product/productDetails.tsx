import React from 'react';
import { Button, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

interface IProps {
    newPrice: number;
    oldPrice: number;
    variants: string[];
    currency: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    oldPrice: {
        textDecoration: 'line-through',
    },
}));

export const ProductDetails: React.FC<IProps> = ({
    newPrice,
    oldPrice,
    currency,
    variants,
}) => {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.root}>
                <Grid item xs={6} md={4}>
                    <Typography variant="h2">
                        {newPrice} {currency}
                    </Typography>
                    <Typography variant="caption" className={classes.oldPrice}>
                        {oldPrice} {currency}
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                    variants
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button variant="outlined" color="secondary">
                        Buy
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};
