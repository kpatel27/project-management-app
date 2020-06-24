import React, { Component } from 'react';

class Board extends Component {
  componentDidMount() {
    this.props.onFetchBoard();
  }

  render() {
    return <div>Hi</div>;
  }
}

export default Board;
