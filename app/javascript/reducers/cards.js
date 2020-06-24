export default cards = (state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      const { list } = action.board;
      return state.concat(list.cards);
    default:
      return state;
  }
}