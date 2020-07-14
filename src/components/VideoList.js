import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {

    console.log(videos);

    const videoItems = videos.map((video) =>
            <VideoItem video ={video} />
    );

    return (
    <div className="ui relaxed devided list" >{videoItems}</div>
    );
}

export default VideoList;