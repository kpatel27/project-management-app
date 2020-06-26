import { connect } from 'react-redux';
import List from './List';
import { editList } from '../../actions/ListActions';

const mapStateToProps = (state, ownProps) => ({
  // board: state.boards.find(board => board.id === +ownProps.match.params.id),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEditList: (updatedProperties, callback) => {
      dispatch(editList(updatedProperties, ownProps.id, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
