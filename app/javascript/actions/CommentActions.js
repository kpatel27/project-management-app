import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCommentSuccess(comment) {
  return { type: types.CREATE_COMMENT_SUCCESS, payload: comment };
}

export function createComment(id, text, callback) {
  return (dispatch) => {
    apiClient.createComment(id, text, (newComment) => {
      dispatch(createCommentSuccess(newComment));
      if (callback) callback(newComment);
    });
  };
}
