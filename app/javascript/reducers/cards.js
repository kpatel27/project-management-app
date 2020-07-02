import * as types from "../constants/ActionTypes";

const cards = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_BOARD_SUCCESS:
      const { lists } = action.board;
      const cards = lists.map((list) => list.cards).flat();
      return cards;
    case types.CREATE_CARD_SUCCESS:
      const card = action.payload;
      return state.concat(card);
    case types.FETCH_CARD_SUCCESS:
      return state.concat(action.payload);
    case types.EDIT_CARD_SUCCESS:
      const editedCard = action.payload;
      return state.map((card) => {
        if (card.id === editedCard.id) {
          return editedCard;
        } else {
          return card;
        }
      });
    default:
      return state;
  }
};

export default cards;
