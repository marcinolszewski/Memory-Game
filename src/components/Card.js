import React from 'react';
import card from '../assets/pika.jpeg';
import styles from './Card.module.scss';

const Card = ({ name, id, pairId, isVisible, handleOnClick }) => {
  return (
    <div className={styles.flipCard} id={id} onClick={handleOnClick}>
      <div
        className={
          isVisible
            ? `${styles.flipCard__inner} ${styles.rotate}`
            : `${styles.flipCard__inner}`
        }
      >
        <div className={styles.flipCard__front}>
          <img className={styles.flipCard__cover} src={card} />
        </div>
        <div className={styles.flipCard__back}>{name}</div>
      </div>
    </div>
  );
};

export default Card;
