import React from 'react';
import styles from './Card.module.scss';

const Card = ({ imgSrc, id, isVisible, handleOnClick }) => {
  return (
    <div className={styles.flipCard} id={id} onClick={handleOnClick}>
      <div
        className={
          isVisible
            ? `${styles.flipCard__inner} ${styles.rotate}`
            : `${styles.flipCard__inner}`
        }
      >
        <div className={styles.flipCard__front}></div>
        <div className={styles.flipCard__back}>
          <img src={imgSrc} className={styles.flipCard__img} alt="Card Front" />
        </div>
      </div>
    </div>
  );
};

export default Card;
