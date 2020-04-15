import React from 'react';
import styles from './Scoreboard.module.scss';

function Scoreboard({ score, steps }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.scoreLabel}>
        Games won: <span>{score}</span>
      </p>
      <p className={styles.scoreLabel}>
        Steps: <span>{steps}</span>
      </p>
    </div>
  );
}

export default Scoreboard;
