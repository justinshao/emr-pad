import React from 'react';
import mediaListWrapper from './mediaListWrapper';
import MediaList from './MediaList';
import { getVideos, deleteMedia } from '../service';

const playVideo = (id) => {
    if(global.native){
            global.native.playVedio(Number(id));
        }else{
            window.open(`/api/MediaFile/${id}`);
        }
}

const VideoList = mediaListWrapper(MediaList, getVideos, playVideo, deleteMedia)

export default (props) => {
    return <VideoList {...props} />
}