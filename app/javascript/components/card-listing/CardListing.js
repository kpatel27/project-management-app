import React from 'react';
import CardListingItem from './CardListingItem';

const CardListing = props => {
  return (
    <div id='cards-container' data-id={`list-${props.listId}-cards`}>
      {props.cards.map(card => (
        <CardListingItem key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardListing;
