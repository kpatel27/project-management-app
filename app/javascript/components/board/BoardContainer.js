import { connect } from 'react-redux'
import Board from './Board'
import store from '../../lib/Store'
import { fetchBoard } from '../../actions/BoardActions'

const mapStateToProps = (state) => ({
  // lists: state.lists,
  // cards: state.cards,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps.match.params)
  // fetchBoard(ownProps.match.params)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
