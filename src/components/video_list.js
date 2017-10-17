import React, {Component} from 'react';
import VideoListItem from './video_list_item';
class VideoList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const lista = this.props.videos.map((video,id)=><VideoListItem key={id} video = {video}/>)
        return(
            <ul className="col-md-4 list-group">
                {lista}
            </ul>
        )
    }
}

export default VideoList;