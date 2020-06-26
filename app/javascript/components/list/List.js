import React, { Component } from "react";
import CardListingContainer from "../card-listing/CardListingContainer";
import AddCardContainer from "../add-card/AddCardContainer";

class List extends Component {
  state = {
    title: this.props.title,
    showEditForm: false,
  };

  showEditForm = (e) => {
    this.setState({ showEditForm: !this.state.showEditForm });
    console.log(e.target);
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
    console.log("hi");
  };

  render() {
    return (
      <div className="list-wrapper">
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
              {this.state.showEditForm ? (
                <input
                  type="text"
                  className="list-title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              ) : (
                <p className="list-title" onClick={this.showEditForm}>
                  {this.props.title}
                </p>
              )}
            </div>
            <div className="add-dropdown add-top">
              <div className="card"></div>
              <a className="button">Add</a>
              <i className="x-icon icon"></i>
              <div className="add-options">
                <span>...</span>
              </div>
            </div>
            <CardListingContainer listId={this.props.id} />
            <div className="add-dropdown add-bottom">
              <div className="card">
                <div className="card-info"></div>
                <textarea name="add-card"></textarea>
                <div className="members"></div>
              </div>
              <a className="button">Add</a>
              <i className="x-icon icon"></i>
              <div className="add-options">
                <span>...</span>
              </div>
            </div>
            <AddCardContainer
              boardId={this.props.board_id}
              listId={this.props.id}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default List;
