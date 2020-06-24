export default function boards(state = [], action) {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      const board = action.board;
      const excludedBoards = state.filter(b => b.id !== board.id);
      const { lists, ...boardWithoutLists } = board;
      return excludedBoards.concat(boardWithoutLists);
    case 'FETCH_BOARDS_SUCCESS':
      return action.boards;
    case 'CREATE_BOARD_SUCCESS':
      const newBoard = action.board;
      return state.concat(newBoard);
    default:
      return state;
  }
}

// [{title: "title", id: 1, lists: [{title: "list1", id:: 1, board_id:1, cards: []}]}]

// state = {
//   users: []
//   boards: [],
//   lists: [],
//   cards: [],
//   comments: []
// }

// users,boards.lists.cards.comments

// comments.filter(comment => comment.id ==== comment.card_id)
