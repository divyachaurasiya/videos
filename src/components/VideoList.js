import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos,onVideoSelect}) => {

    //console.log(videos);

    const videoItems = videos.map(
        (video) =>
            <VideoItem key={video.id.videoId} video ={video} onVideoSelect={onVideoSelect} />
        );

    return (
    <div className="ui relaxed divided list">
        {videoItems}
    </div>
    );
}

export default VideoList;