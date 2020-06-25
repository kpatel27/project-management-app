import * as types from "../constants/ActionTypes";

export default function boards(state = [], action) {
  switch (action.type) {
    case types.FETCH_BOARD_SUCCESS:
      const board = action.board;
      const excludedBoards = state.filter(b => b.id !== board.id);
      const { lists, ...boardWithoutLists } = board;
      return excludedBoards.concat(boardWithoutLists);
    case types.FETCH_BOARDS_SUCCESS:
      return action.boards;
    case types.CREATE_BOARD_SUCCESS:
      const newBoard = action.board;
      return state.concat(newBoard);
    default:
      return state;
  }
}
