import * as types from '../constants/ActionTypes';

export default function lists(state = [], action) {
  switch (action.type) {
    case types.FETCH_BOARD_SUCCESS:
      const { lists } = action.board;
      return lists;
    case types.CREATE_LIST_REQUEST:
      return state;
    case types.CREATE_LIST_SUCCESS:
      const newList = action.list;
      console.log(action);
      return state.concat(newList);
    default:
      return state;
  }
}
