import React from 'react';
import { Link, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FONT_SIZE, FONT_WEIGHT } from '../../common/consts/fonts';
import { PRODUCTS } from '../../mocks/availableProducts';

interface IProps {}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: FONT_SIZE.BIG,
        fontWeight: FONT_WEIGHT.REGULAR,
        marginRight: theme.spacing(3),
        borderRight: `1px solid ${theme.palette.primary.main}`,
    },
    link: {
        paddingBottom: theme.spacing(),

        '&:focus': {
            color: theme.palette.secondary.main,
        },
    },
}));

const products = PRODUCTS;

export const ProductList: React.FC<IProps> = () => {
    const classes = useStyles();
    return (
        <aside className={classes.root}>
            {products.map(product => (
                <Link key={product.id} href={'#'} className={classes.link}>
                    {product.name}
                </Link>
            ))}
        </aside>
    );
};
