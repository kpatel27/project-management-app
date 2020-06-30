import { connect } from "react-redux";
import Board from "./Board";
import { fetchBoard } from "../../actions/BoardActions";

const mapStateToProps = (state, ownProps) => {
  let boardId = null;

  if (ownProps.match.params[0] === "boards") {
    boardId = +ownProps.match.params.id;
  } else {
    // url is /cards/:id
    if (state.cards.length > 0) {
      const card = state.cards.find((c) => c.id === +ownProps.match.params.id);
      boardId = card.board_id;
    }
  }

  if (boardId) {
    return {
      boardId,
      board: state.boards.find((board) => board.id === boardId),
    };
  } else {
    return { boardId };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBoard: (boardId) => {
      dispatch(fetchBoard(boardId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
