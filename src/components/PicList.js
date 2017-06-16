import React from 'react';
import mediaListWrapper from './mediaListWrapper';
import MediaList from './MediaList';
import { getPictures, deleteMedia } from '../service';

const playPicture = (id) => {
    if (global.native) {
        global.native.viewPic(Number(id));
    } else {
        window.open(`/api/MediaFile/${id}`);
    }
}

const PicList = mediaListWrapper(MediaList, getPictures, playPicture, deleteMedia)

export default (props) => {
    return <PicList {...props} />
}