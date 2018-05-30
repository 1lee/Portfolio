import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map( (video) => {
      return <VideoListItem key={video.etag}
                            video={video}
                            onClickVideo={props.onClickVideo} />/**loop through
                                                  the videos array and create
                                                  a list item for each*/
    });//END const videoItems

  return(
    <ul className="col-md-4 list-group video-list">
      {videoItems}
    </ul>
  );//END return
};//END VideoList

export default VideoList;
