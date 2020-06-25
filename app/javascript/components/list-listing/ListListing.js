import React, { Component } from 'react';
import List from '../list/List';

class ListListing extends Component {
  render() {
    return (
      <div id='existing-lists' className='existing-lists'>
        {this.props.lists.map(list => {
          return <List key={list.id} {...list} />;
        })}
      </div>
    );
  }
}

export default ListListing;
