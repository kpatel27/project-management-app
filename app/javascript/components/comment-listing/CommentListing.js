import React, { Component } from "react";
import Comment from "../comment/Comment";

class CommentListing extends Component {
  componentDidMount() {
    if (!this.props.comments) {
      this.props.onFetchComments(this.props.cardId);
    }
  }

  render() {
    return (
      <div>
        {this.props.comments &&
          this.props.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    );
  }
}

export default CommentListing;
