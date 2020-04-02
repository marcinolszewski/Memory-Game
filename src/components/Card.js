import React from 'react';
import card from '../assets/pika.jpeg';

const Card = ({ name, id, pairId, isVisible, handleOnClick }) => {
  return (
    <div
      id={id}
      data-number={pairId}
      className={isVisible ? 'card__inner visible' : 'card__inner'}
      onClick={handleOnClick}
    >
      <img className="card__front" src={card} alt="" />
      <div className="card__back">{name}</div>
    </div>
  );
};

export default Card;
