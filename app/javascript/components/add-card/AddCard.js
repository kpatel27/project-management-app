import React, { Component } from "react";

export default class AddCard extends Component {
  state = {
    showAddCardForm: false,
    title: "",
  };

  handleOpenForm = () => {
    this.setState({ showAddCardForm: true });
    this.props.onClickShowForm(this.props.listId);
  };

  handleCloseForm = () => {
    this.props.onClickHideForm();
  };

  handleAddCard = (e) => {
    e.preventDefault();
    this.props.onCreateCard(this.state.title, () => {
      this.handleCloseForm();
      this.setState({ title: "" });
    });
  };

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <>
        <div
          className={`add-dropdown add-bottom${
            this.state.showAddCardForm ? " active-card" : ""
          }`}
        >
          <div className="card">
            <div className="card-info"></div>
            <textarea
              name="add-card"
              onChange={this.handleTitle}
              defaultValue={this.state.title}
            ></textarea>
            <div className="members"></div>
          </div>
          <a className="button" onClick={this.handleAddCard}>
            Add
          </a>
          <i className="x-icon icon" onClick={this.handleCloseForm}></i>
          <div className="add-options">
            <span>...</span>
          </div>
        </div>
        <div
          onClick={this.handleOpenForm}
          className="add-card-toggle"
          data-position="bottom"
        >
          Add a card...
        </div>
      </>
    );
  }
}
