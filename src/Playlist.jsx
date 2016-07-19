import React, {Component} from 'react';

class Playlist extends Component {
  constructor(props){
    super(props);
  }

  _isVideoSelected(vid){
    return (this.props.selected_video && vid.id == this.props.selected_video.id);
  }

  render() {
    return (
      <ul className='rp-playlist'>
        <p className='rp-playlist-title'>Videos List:</p>
        {
          this.props.playlistVideos.map((vid) => {
            return (
              <li
                key={vid.id}
                className={`rp-playlist-item ${this._isVideoSelected(vid) ? 'selected' : ''}`}
                onClick={() => this.props.onVideoSelect(vid)}
              >
                { vid.title }
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default Playlist;
