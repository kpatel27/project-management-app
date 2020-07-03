import * as types from "../constants/ActionTypes";

const comments = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_CARD_SUCCESS:
      const { comments } = action.card;
      return comments;
    case types.CREATE_COMMENT_SUCCESS:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default comments;
