import React, {Component} from 'react';

class BlogList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className="rp-search-input">
          <input
            id="search-query"
            type="text"
            onChange={(e) => this.props.onQueryChange(e.target.value)}
          />
        </div>
        <ul className='rp-bloglist'>
          {
            this.props.itemsList.map((item) => {
              return (
                <li
                  key={item.id}
                  className='rp-bloglist-item'
                  onClick={() => this.props.onItemSelect(item)}
                >
                  { item.title }
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

// BlogList.propTypes = {
//   itemsList: React.PropTypes.any.isRequired,
//   onItemSelect: React.PropTypes.func.isRequired,
// };

export default BlogList;
