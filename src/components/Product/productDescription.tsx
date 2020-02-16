import React, { useState } from 'react';
import { Button, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface IProps {
    description: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        textAlign: 'center',
    },
    description: {
        height: 300,
        marginTop: theme.spacing(2),
        textAlign: 'justify',
        overflow: 'hidden',
    },
    expanded: {
        height: '100%',
    },
}));

export const ProductDesc: React.FC<IProps> = props => {
    const classes = useStyles();
    const { description } = props;
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={classes.root}>
            <Typography
                variant="h3"
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
                className={`${classes.description} ${
                    expanded ? classes.expanded : ''
                }`}
            />
            <Button color="secondary" onClick={() => setExpanded(!expanded)}>
                {expanded ? 'Collapse' : 'Read More'}
            </Button>
        </div>
    );
};
