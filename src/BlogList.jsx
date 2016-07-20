import React, {Component} from 'react';

class BlogList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className='rp-bloglist'>
        {
          this.props.itemsList.map((item) => {
            return (
              <li
                key={item.id}
                className='rp-bloglist-item'
              >
                { item.title }
                <button onClick={(ev) => this.props.onItemDelete(item)}>
                  delete
                </button>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default BlogList;
