import { connect } from "react-redux";
import CommentListing from "./CommentListing";
import { fetchCard } from "../../actions/CardActions";

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments,
    cardId: ownProps.cardId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchComments: (id, callback) => {
      dispatch(fetchCard(id, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentListing);
