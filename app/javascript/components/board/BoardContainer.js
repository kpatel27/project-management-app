import { connect } from 'react-redux';
import Board from './Board';
import { fetchBoard } from '../../actions/BoardActions';

const mapStateToProps = (state, ownProps) => ({
  board: state.boards.find(board => board.id === +ownProps.match.params.id),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchBoard: () => {
      dispatch(fetchBoard(ownProps.match.params.id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
