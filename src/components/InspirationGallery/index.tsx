import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { INSPIRATION_MOCK } from '../../mocks/inspirations';
import { Inspiration } from './Inspiration';

export interface IInspiration {
    title: string;
    content: string;
}

interface IProps {}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        justifyContent: 'space-around',

        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
}));

const inspirations = [INSPIRATION_MOCK, INSPIRATION_MOCK, INSPIRATION_MOCK];

export const InspirationGallery: React.FC<IProps> = () => {
    const classes = useStyles();

    return (
        <section>
            <div className={classes.root}>
                {inspirations &&
                    inspirations.map((insp, idx) => (
                        <Inspiration
                            title={insp.title}
                            content={insp.content}
                            key={idx}
                        />
                    ))}
            </div>
        </section>
    );
};
