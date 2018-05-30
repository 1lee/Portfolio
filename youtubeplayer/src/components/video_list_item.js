import React from 'react';

const VideoListItem = ({video, onClickVideo}) => {
    const imgUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={ () => onClickVideo(video) } className="list-group-item">
            <div className="media video-list">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    ); //END return
};//END VideoListItem

export default VideoListItem;
