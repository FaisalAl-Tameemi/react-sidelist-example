import React, {Component} from 'react';

class App extends Component {
  render() {
    const {title, text} = this.props;
    return (
      <div className='rp-full-layout'>
        <h3 className='rp-content-title'>
          { title }
        </h3>
        <p className='rp-content-text'>
          { text }
        </p>
      </div>
    );
  }
}

export default App;
