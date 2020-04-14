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
        Congratulations,
        <br />
        you won!
      </p>
      <button className={styles.button} onClick={handleClick}>
        Start again
      </button>
    </div>
  );
};

export default Gameover;
