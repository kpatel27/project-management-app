import React, { Component } from "react";

export default class AddCard extends Component {
  state = {
    showAddCardForm: false,
  };

  handleOpenForm = () => {
    this.setState({ showAddCardForm: true });
    this.props.onClickShowForm(this.props.listId);
  };

  render() {
    return this.state.showAddCardForm ? (
      <div className="add-dropdown add-bottom active-card">
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
    ) : (
      <div
        onClick={this.handleOpenForm}
        className="add-card-toggle"
        data-position="bottom"
      >
        Add a card...
      </div>
    );
  }
}
