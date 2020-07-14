import React from 'react';
import './VideoItem.css';

const VideoItem = ({video,onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="ui grid  item video-item">
            <img className="ui image ten wide column" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="six wide column">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;