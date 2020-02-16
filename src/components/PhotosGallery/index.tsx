import React, { useState } from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import paper1 from '../../assets/paper1.jpg';
import paper2 from '../../assets/paper2.jpg';
import paper3 from '../../assets/paper3.jpg';

interface IProps {
    productName: string;
}

const SMALL_PHOTO_SPACING = 2;

const useStyles = makeStyles((theme: Theme) => ({
    mainPhoto: {
        width: '100%',
        paddingBottom: 12,
    },
    smallPhoto: {
        paddingRight: theme.spacing(SMALL_PHOTO_SPACING),
        cursor: 'pointer',
    },
    smallPhotos: {
        '& :last-child': {
            paddingRight: 0,
        },
    },
}));

const gallery = [paper1, paper2, paper3];

export const PhotosGallery: React.FC<IProps> = ({ productName }) => {
    const classes = useStyles();
    const [selectedPhoto, setSelectedPhoto] = useState(gallery[0]);

    const paddingsSize = (gallery.length - 1) * 8 * SMALL_PHOTO_SPACING;
    const smallPhotoWidth = `calc((100% - ${paddingsSize}px) / ${gallery.length})`;

    return (
        <section>
            <img
                src={selectedPhoto}
                className={`${classes.mainPhoto} u-photo`}
                alt={productName}
            />
            <div className={classes.smallPhotos}>
                {gallery &&
                    gallery.map(photo => (
                        <img
                            src={photo}
                            key={photo}
                            style={{ width: `${smallPhotoWidth}` }}
                            className={`${classes.smallPhoto} u-photo`}
                            alt={productName}
                            onClick={() => setSelectedPhoto(photo)}
                        />
                    ))}
            </div>
        </section>
    );
};
