import React, { Component } from 'react';
import ListContainer from '../list/ListContainer';

class ListListing extends Component {
  render() {
    return (
      <div id='existing-lists' className='existing-lists'>
        {this.props.lists.map(list => {
          return <ListContainer key={list.id} {...list} />;
        })}
      </div>
    );
  }
}

export default ListListing;
