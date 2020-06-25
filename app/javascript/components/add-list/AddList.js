import React, { Component } from "react";

export default class AddList extends Component {
  state = {
    isFormOpen: false,
    title: "",
  };

  openForm = () => {
    this.setState({ isFormOpen: true }, () =>
      document.getElementById("new-list-title").focus()
    );
  };

  closeForm = () => {
    this.setState({ isFormOpen: false });
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addList(this.state.title, () => {
      this.closeForm();
      this.setState({ title: "" });
    });
  };

  render() {
    const selected = this.state.isFormOpen ? "selected" : "";
    return (
      <div
        id="new-list"
        className={`new-list ${selected}`}
        onClick={this.openForm}
      >
        <span>Add a list...</span>
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-list-title"
            type="text"
            placeholder="Add a list..."
            onChange={this.handleChange}
          />
          <div>
            <input type="submit" className="button" value="Save" />
            <i className="x-icon icon" onClick={this.closeForm}></i>
          </div>
        </form>
      </div>
    );
  }
}
