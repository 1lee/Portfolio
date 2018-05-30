import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoInFocus from './components/video_in_focus';

const API_KEY = 'AIzaSyAJ0SGpFyhnAn0a8-5kw1YTdf4mz0WbE78';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }; //Initialize State

this.videoSearch('beyonce'); //initial search
    } //END constructor

videoSearch(searchTerm){
    YTSearch({ key: API_KEY, term: searchTerm}, (videos) => {/**from API*/
      this.setState( {videos: videos,
                      selectedVideo: videos[0]//initialize to first video in array
      } );//fetch videos from Youtube and place in state object
    });//END YTSearch()
}//END videoSearch



    render() {
const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 400)
/**Previous debounce to throttle appearance of results*/

        return(
        <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoInFocus video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos}
                     onClickVideo={selectedVideo => this.setState( {selectedVideo} )} />
      </div>
        ); //END return
    } //END render
} //END class
ReactDOM.render(<App/>, document.querySelector('.container'));
