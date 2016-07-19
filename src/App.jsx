import React, {Component} from 'react';
import Toolbar from './Toolbar.jsx';
import BlogListContainer from './BlogListContainer.jsx';

class App extends Component {
  constructor(props){
    // pass the props to React.Component (i.e. the parent class of this component)
    super(props);
    // setup the default state for the app
    this.state = {
      title: 'React Blog Example'
    };
  }

  render() {
    return (
      <div className='app-container'>
        <Toolbar title={this.state.title} />
        <BlogListContainer />
      </div>
    );
  }
}

export default App;
