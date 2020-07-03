import { connect } from 'react-redux';
import CommentListing from './CommentListing';
// import { fetchCard, editCard } from '../../actions/CardActions';

const mapStateToProps = (state, ownProps) => {
  return {
    //
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // onFetchCard: id => {
    //   dispatch(fetchCard(id));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentListing);
