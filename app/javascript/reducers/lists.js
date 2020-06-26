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
      return state.concat(newList);
    case types.EDIT_LIST_SUCCESS:
      const updatedList = action.list;
      return state.map(list =>
        list.id === updatedList.id ? updatedList : list
      );
    default:
      return state;
  }
}
