import React from 'react';
import mediaListWrapper from './mediaListWrapper';
import MediaList from './MediaList';
import { getAudios, deleteMedia } from '../service';

const playAudio = (id) => {
    if (global.native) {
        global.native.playAudio(Number(id));
    } else {
        window.open(`/api/MediaFile/${id}`);
    }
}

const AudioList = mediaListWrapper(MediaList, getAudios, playAudio, deleteMedia)

export default (props) => {
    return <AudioList {...props} />
}
