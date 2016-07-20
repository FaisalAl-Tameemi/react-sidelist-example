import React, {Component} from 'react';

class Toolbar extends Component {
  render() {
    // in ES6
    const { title } = this.props;
    // in ES5
    // var title = this.props.title;
    return (
      <div className='rp-main-toolbar'>
        <h1 className='rp-toolbar-title'>
          { title }
        </h1>
      </div>
    );
  }
}

export default Toolbar;
