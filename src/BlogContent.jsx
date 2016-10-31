import React, {Component} from 'react';

class BlogContent extends Component {
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

BlogContent.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default BlogContent;
