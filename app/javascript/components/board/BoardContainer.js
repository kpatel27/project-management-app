import { connect } from 'react-redux';
import Board from './Board';
import store from '../../lib/Store';
import { fetchBoard } from '../../actions/BoardActions';

const mapStateToProps = state => ({
  // lists: state.lists,
  // cards: state.cards,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchBoard: () => {
      dispatch(fetchBoard(ownProps.match.params.id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Board);
