import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logoImage from '../../assets/OfficeSupplies.png';
import { MODULE_SPACING } from '../../common/consts/styles';

interface IProps {}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        minHeight: 100,
        borderTop: `16px solid ${theme.palette.primary.main}`,
        alignItems: 'center',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(MODULE_SPACING),
        paddingRight: theme.spacing(MODULE_SPACING),
    },
    logo: {
        height: 40,
    },
    content: {},
}));

export const Footer: React.FC<IProps> = () => {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <img src={logoImage} className={classes.logo} alt="logo" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" className={classes.content}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit
                        amet lacus accumsan et viverra justo commodo. Proin
                        sodales pulvinar tempor. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Nam fermentum, nulla luctus pharetra vulputate, felis
                        tellus mollis orci, sed rhoncus sapien nunc eget odio.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    bestsellers
                </Grid>
                <Grid item xs={12} md={3}>
                    social
                </Grid>
            </Grid>
        </footer>
    );
};
