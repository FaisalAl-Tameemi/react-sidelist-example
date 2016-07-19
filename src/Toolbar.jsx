import React, {Component} from 'react';

class Toolbar extends Component {
  render() {
    const { title } = this.props;
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
