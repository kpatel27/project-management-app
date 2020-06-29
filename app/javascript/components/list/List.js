import React, { Component } from "react";
import CardListingContainer from "../card-listing/CardListingContainer";
import AddCardContainer from "../add-card/AddCardContainer";

class List extends Component {
  state = {
    title: this.props.title,
    showEditForm: false,
  };

  toggleEditForm = () => {
    this.setState({ showEditForm: !this.state.showEditForm });
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = (e) => {
    if (!this.state.title) {
      e.target.focus();
    } else {
      this.props.onEditList({ title: this.state.title }, () => {
        this.toggleEditForm();
      });
    }
  };

  // handleAddCard = () => {};

  render() {
    return (
      <div
        className={`list-wrapper${
          this.props.addCardListId === this.props.id
            ? " add-dropdown-active"
            : ""
        }`}
      >
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
                  onBlur={this.handleSubmit}
                />
              ) : (
                <p className="list-title" onClick={this.toggleEditForm}>
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
            <AddCardContainer
              boardId={this.props.board_id}
              listId={this.props.id}
              onClickShowForm={this.props.onClickShowForm}
              onClickHideForm={this.props.onClickHideForm}
            />
            {/* <div class="add-dropdown add-bottom active-card">
              <div class="card">
                <div class="card-info"></div>
                <textarea name="add-card"></textarea>
                <div class="members"></div>
              </div>
              <a class="button">Add</a>
              <i class="x-icon icon"></i>
              <div class="add-options">
                <span>...</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default List;
