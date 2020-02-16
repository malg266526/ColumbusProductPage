import React from 'react';
import { Button, TextField, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface IProps {}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    input: {
        marginRight: theme.spacing(2),
    },
}));

export const ProductSearch: React.FC<IProps> = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TextField
                name="search"
                label="search"
                className={classes.input}
                // value={}
                // onChange={}
                margin="dense"
                variant="outlined"
            />
            <Button variant="contained" color="primary">
                Search
            </Button>
        </div>
    );
};
