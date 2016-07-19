import React, {Component} from 'react';

class BlogList extends Component {
  constructor(props){
    super(props);
  }

  _isItemSelected(item){
    return (this.props.selectedItem && item.id == this.props.selectedItem.id);
  }

  render() {
    return (
      <ul className='rp-bloglist'>
        {/*<p className='rp-bloglist-title'>Blog List:</p>*/}
        {
          this.props.itemsList.map((item) => {
            return (
              <li
                key={item.id}
                className={`rp-bloglist-item ${this._isItemSelected(item) ? 'selected' : ''}`}
                onClick={() => this.props.onItemSelect(item)}
              >
                { item.title }
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default BlogList;
