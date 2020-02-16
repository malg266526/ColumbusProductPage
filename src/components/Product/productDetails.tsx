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
    variantsSelect: {
        minWidth: 180,
    },
}));

export const ProductDetails: React.FC<IProps> = props => {
    const classes = useStyles();
    const { newPrice, oldPrice, currency, variants } = props;
    const [currentVariant, setCurrentVariant] = useState(variants[0]);

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
                            {variants &&
                                variants.map(variant => (
                                    <option key={variant} value={variant}>
                                        {variant}
                                    </option>
                                ))}
                        </Select>
                    </FormControl>
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
