import { connect } from 'react-redux';
import CardListing from './CardListing';

const mapStateToProps = (state, ownProps) => ({
  cards: state.cards.filter(card => card.list_id === ownProps.listId),
});

export default connect(mapStateToProps, null)(CardListing);
