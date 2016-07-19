import React, {Component} from 'react';
import Playlist from './Playlist.jsx';
import YouTube from 'react-youtube';

const opts = {
  height: '100%',
  width: '100%',
  playerVars: {
    autoplay: 1
  }
};

class PlaylistContainer extends Component {
  constructor(props){
    // pass the props to React.Component (i.e. the parent class of this component)
    super(props);
    // setup the default state for the app
    this.state = {
      selected_video: null,
      videos: []
    };
  }

  componentDidMount(){
    // make API call .then update state
    this.setState({
      videos: [{
        id: 'fxbCHn6gE3U',
        title: 'Intro to ReactJS',
        video_id: 'fxbCHn6gE3U'
      }, {
        id: '2g811Eo7K8U',
        title: 'Intro to AngularJS',
        video_id: '2g811Eo7K8U'
      }]
    });
  }

  _onVideoSelect(video){
    this.setState({
      selected_video: video
    });
  }

  render() {
    return (
      <div className='rp-full-layout'>
        <div className='rp-playlist-container'>
          <Playlist
            playlistVideos={this.state.videos}
            selectedVideo={this.state.selected_video}
            onVideoSelect={(video) => this._onVideoSelect(video)}
          />
        </div>
        {
          this.state.selected_video &&
            <div className='rp-video-container'>
              <YouTube
                videoId={this.state.selected_video.video_id}
                id={this.state.selected_video.id}
              />
            </div>
        }
      </div>
    );
  }
}

export default PlaylistContainer;
