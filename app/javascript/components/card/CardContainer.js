import { connect } from 'react-redux';
import Card from './Card';
import { fetchCard } from '../../actions/CardActions';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchCard: (id, callback) => {
      dispatch(fetchCard(id, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
