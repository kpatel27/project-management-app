const cards = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      const { lists } = action.board;
      const cards = lists.map(list => list.cards).flat();
      return cards;
    default:
      return state;
  }
};

export default cards;
