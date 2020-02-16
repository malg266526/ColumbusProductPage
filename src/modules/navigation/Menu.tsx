import React from 'react';
import { Theme, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../common/consts/colors';
import { FONT_SIZE, FONT_WEIGHT } from '../../common/consts/fonts';

interface IProps {}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        height: 40,
        backgroundColor: COLORS.PINK,
        alignItems: 'center',
        padding: theme.spacing(),
    },
    link: {
        color: 'white',
        marginRight: theme.spacing(4),
        fontSize: FONT_SIZE.REGULAR,
        fontWeight: FONT_WEIGHT.LIGHT,
    },
}));

const navList = ['All our products', 'Inspiration for the office', 'About OS'];

export const NavMenu: React.FC<IProps> = () => {
    const classes = useStyles();
    return (
        <nav className={classes.root}>
            {navList.map(nav => (
                <Link
                    key={nav}
                    href={'#'}
                    variant="body2"
                    className={classes.link}
                >
                    {nav}
                </Link>
            ))}
        </nav>
    );
};
