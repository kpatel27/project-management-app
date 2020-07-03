import { connect } from 'react-redux';
import Card from './Card';
import { fetchCard, editCard } from '../../actions/CardActions';

const mapStateToProps = (state, ownProps) => {
  let card;
  let list;
  if (state.cards.length > 0) {
    card = state.cards.find(c => c.id === +ownProps.match.params.id);
    list =
      state.lists.length > 0 && state.lists.find(l => l.id === card.list_id);
  }
  return {
    card,
    currentCardList: list,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchCard: id => {
      dispatch(fetchCard(id));
    },
    onEditCard: (id, newProps, callback) => {
      dispatch(editCard(id, newProps, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
