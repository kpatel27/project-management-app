import React, { Component } from "react";
import ListContainer from "../list/ListContainer";

class ListListing extends Component {
  state = {
    addCardListId: null,
  };

  handleShowForm = (id) => {
    this.setState({ addCardListId: id });
  };

  handleHideForm = () => {
    this.setState({ addCardListId: null });
  };

  render() {
    return (
      <div id="existing-lists" className="existing-lists">
        {this.props.lists.map((list) => {
          return (
            <ListContainer
              key={list.id}
              {...list}
              onClickShowForm={this.handleShowForm}
              onClickHideForm={this.handleHideForm}
              addCardListId={this.state.addCardListId}
            />
          );
        })}
      </div>
    );
  }
}

export default ListListing;
