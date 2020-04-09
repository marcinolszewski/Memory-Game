import React from 'react';
import styles from './Gameover.module.scss';

const Gameover = ({ handleClick, isVisible }) => {
  return (
    <div
      className={
        isVisible ? styles.wrapper : `${styles.wrapper} ${styles.hidden}`
      }
    >
      <p className={styles.header}>
        Gratulacje,
        <br />
        wygrałaś!
      </p>
      <button className={styles.button} onClick={handleClick}>
        Rozpocznij od nowa
      </button>
    </div>
  );
};

export default Gameover;
