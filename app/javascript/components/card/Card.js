import React from 'react';

const Card = props => {
  return (
    <div className='card-background'>
      <div className='card '>
        <i className='edit-toggle edit-icon sm-icon'></i>
        <div className='cover-image'></div>
        <div className='card-info'>
          <p>{props.title}</p>
        </div>
        <div className='card-icons'>
          <i className='clock-icon sm-icon overdue '>{props.due_date}</i>
          <i className='description-icon sm-icon'></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
