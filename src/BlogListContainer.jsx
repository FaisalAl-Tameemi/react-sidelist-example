import React, {Component} from 'react';
import BlogList from './BlogList.jsx';
import BlogContent from './BlogContent.jsx';

class BlogListContainer extends Component {
  constructor(props){
    // pass the props to React.Component (i.e. the parent class of this component)
    super(props);
    // setup the default state for the app
    this.state = {
      selected_item: null,
      items: []
    };
  }

  componentDidMount(){
    // define data, could otherwise do this from file
    // but would actually be a DB in real life
    const items_to_show = [{
      id: '1akf',
      title: 'Intro to ReactJS',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    }, {
      id: '2adc',
      title: 'Intro to AngularJS',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
    }, {
      id: '81cs',
      title: 'Intro to CSS3',
      text: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    }];
    // make API call .then update state, simulate below
    setTimeout(() => {
      this.setState({
        items: items_to_show,
        selected_item: items_to_show[0]
      });
    }, 2000);
  }

  _onItemSelect(item){
    this.setState({
      selected_item: item
    });
  }

  _onItemDelete(item){
    const new_items_list = this.state.items.filter(function(current){
      return current.id !== item.id;
    });
    this.setState({
      items: new_items_list,
      selected_item: new_items_list[0]
    });
  }

  render() {
    // define a content block
    const content = (
      <div className='rp-content-container'>
        <BlogContent {...this.state.selected_item} />
      </div>
    );
    // define loading block
    const loading = (
      <div className='rp-loading'>
        Loading...
      </div>
    );
    // define list block
    const list = (
      <div className='rp-bloglist-container'>
        <BlogList
          itemsList={this.state.items}
          selectedItem={this.state.selected_item}
          onItemSelect={(item) => this._onItemSelect(item)}
          onItemDelete={(item) => this._onItemDelete(item)}
        />
      </div>
    );
    // this is what actually shows on the page
    // below is where all the constants define above are being used
    // that's done simply for cleaner code, you could otherwise do it all below
    return (
      <div className='rp-full-layout'>
        { list }
        { this.state.selected_item ? content : loading }
      </div>
    );
  }
}

export default BlogListContainer;
