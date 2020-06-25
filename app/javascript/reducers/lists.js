export default function lists(state = [], action) {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      const { lists } = action.board;
      return lists;
    default:
      return state;
  }
}
