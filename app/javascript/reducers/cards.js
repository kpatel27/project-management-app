const cards = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      // const { list } = action.board;
      // return state.concat(list.cards);
      return state;
    default:
      return state;
  }
};

export default cards;
