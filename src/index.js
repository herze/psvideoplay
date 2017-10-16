import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import registerServiceWorker from './registerServiceWorker';

const API_KEY = 'AIzaSyC6v5MWDzhp4BbQ7pxe5cVQI9DxSM6NRLE';

class App extends Component{
    constructor(){
        super();
        this.state = {
            videos: []
        }
        YTSearch({key: API_KEY, term: 'Dross'},(videos)=>{this.setState({videos})});
    }
    render(){
        return(
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}
ReactDOM.render(
<App />
, document.getElementById('root'));
registerServiceWorker();
