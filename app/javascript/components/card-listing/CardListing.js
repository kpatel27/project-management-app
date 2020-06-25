import React from 'react';
import Card from '../card/Card';

const CardListing = props => {
  return (
    <div id='cards-container' data-id='list-1-cards'>
      {props.cards.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardListing;
