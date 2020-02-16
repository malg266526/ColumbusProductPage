import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logoImage from '../../assets/OfficeSupplies.png';
import facebookIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import linkedinIcon from '../../assets/linkedin.png';

import { MODULE_SPACING } from '../../common/consts/styles';
import { FONT_WEIGHT } from '../../common/consts/fonts';

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
    desc: {
        textAlign: 'justify',
        paddingRight: theme.spacing(2),
    },
    listTitle: {
        fontWeight: FONT_WEIGHT.BOLD,
        paddingBottom: theme.spacing(),
    },
    listItem: {
        textAlign: 'center',
    },
    list: {
        textAlign: 'center',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcon: {
        width: 20,
        height: 20,
        marginRight: theme.spacing(),
    },
}));

const BESTSELLERS = ['A4', 'A5', 'Pens', 'Staplers', 'A4', 'A5', 'Pens'];

export const Footer: React.FC<IProps> = () => {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Grid container>
                <Grid item xs={12} lg={6}>
                    <img src={logoImage} className={classes.logo} alt="logo" />
                    <Typography variant="h4" className={classes.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit
                        amet lacus accumsan et viverra justo commodo. Proin
                        sodales pulvinar tempor. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Nam fermentum, nulla luctus pharetra vulputate, felis
                        tellus mollis orci, sed rhoncus sapien nunc eget odio.
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={3} className={classes.list}>
                    <Typography variant="caption" className={classes.listTitle}>
                        Bestsellers
                    </Typography>
                    <Grid container>
                        {BESTSELLERS.map((elem, idx) => (
                            <Grid
                                key={idx}
                                item
                                xs={12}
                                lg={6}
                                className={classes.listItem}
                            >
                                <Link href={'#'}>{elem}</Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={3} className={classes.list}>
                    <Typography variant="caption" className={classes.listTitle}>
                        We're social!
                    </Typography>
                    <div className={classes.links}>
                        <Link href={'#'} className={classes.link}>
                            <img
                                src={facebookIcon}
                                className={classes.socialIcon}
                                alt="facebook"
                            />
                            Facebook
                        </Link>
                        <Link href={'#'} className={classes.link}>
                            <img
                                src={twitterIcon}
                                className={classes.socialIcon}
                                alt="twitter"
                            />
                            Twitter
                        </Link>
                        <Link href={'#'} className={classes.link}>
                            <img
                                src={linkedinIcon}
                                className={classes.socialIcon}
                                alt="linkedin"
                            />
                            Linked in
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </footer>
    );
};
