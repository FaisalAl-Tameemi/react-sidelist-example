import React, {Component} from 'react';
import Toolbar from './Toolbar.jsx';
import PlaylistContainer from './PlaylistContainer.jsx';

class App extends Component {
  constructor(props){
    // pass the props to React.Component (i.e. the parent class of this component)
    super(props);
    // setup the default state for the app
    this.state = {
      title: 'React Playlist Example'
    };
  }

  componentDidMount(){
    // make API call .then update state
    this.setState({
      videos: [{
        id: '1akf',
        title: 'Intro to ReactJS',
        video_id: '2g811Eo7K8U'
      }, {
        id: '2adc',
        title: 'Intro to AngularJS',
        video_id: '2g811Eo7K8U'
      }]
    });
  }

  render() {
    return (
      <div className='app-container'>
        <Toolbar title={this.state.title} />
        <PlaylistContainer />
      </div>
    );
  }
}

export default App;
