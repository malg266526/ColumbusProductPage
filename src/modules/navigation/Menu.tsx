import React from 'react';
import { Theme, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../common/consts/colors';

interface IProps {}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: 40,
        backgroundColor: COLORS.PINK,
        alignItems: 'center',
        padding: theme.spacing(),
    },
    menuHorizontal: {
        display: 'flex',
    },
}));

const navList = ['All our products', 'Inspiration for the office', 'About OS'];

export const Menu: React.FC<IProps> = () => {
    const classes = useStyles();
    return (
        <nav className={classes.root}>
            <Menu>
                {navList.map(nav => (
                    <MenuItem>{nav}</MenuItem>
                ))}
            </Menu>
        </nav>
    );
};
