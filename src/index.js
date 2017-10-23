import Lodash from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import registerServiceWorker from './registerServiceWorker';

const API_KEY = 'AIzaSyC6v5MWDzhp4BbQ7pxe5cVQI9DxSM6NRLE';

class App extends Component{
    constructor(){
        super();
        this.state = {
            videos: [],
            selectedVideo: null
        }
    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term},(videos)=>{
            this.setState({videos,selectedVideo: videos[0]})
        });
    }
    render(){
        const videoSearch = Lodash.debounce((term)=>{this.videoSearch(term)},300);
        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        )
    }
}
ReactDOM.render(
<App />
, document.getElementById('root'));
registerServiceWorker();
