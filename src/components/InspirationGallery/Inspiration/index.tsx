import React from 'react';
import { Card, CardContent, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import paper1 from '../../../assets/paper1.jpg';
import { FONT_WEIGHT } from '../../../common/consts/fonts';

interface IProps {
    title: string;
    content: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        borderColor: theme.palette.primary.main,
        width: 300,
        height: 300,
        backgroundImage: `url(${paper1})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        marginBottom: 0,
        overflow: 'scroll',
        maxHeight: 300,
        boxSizing: 'border-box',

        [theme.breakpoints.down('md')]: {
            height: '100%',
            maxHeight: '100%',
            marginBottom: theme.spacing(2),
        },
    },
    title: {
        color: theme.palette.secondary.main,
    },
    content: {
        fontWeight: FONT_WEIGHT.LIGHT,
    },
}));

export const Inspiration: React.FC<IProps> = ({ title, content }) => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card}>
            <CardContent>
                <Typography variant="h1" className={classes.title}>
                    {title}
                </Typography>
                <Typography variant="h3" className={classes.content}>
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
};
