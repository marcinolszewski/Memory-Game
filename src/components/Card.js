import React from 'react';

const Card = ({ name, id, pairId, isVisible, handleOnClick }) => {
  return (
    <span
      id={id}
      className={isVisible ? 'card visible' : 'card'}
      data-number={pairId}
      onClick={handleOnClick}
    >
      {name}
    </span>
  );
};

export default Card;
