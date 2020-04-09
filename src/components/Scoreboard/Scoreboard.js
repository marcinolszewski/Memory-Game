import React from 'react';
import styles from './Scoreboard.module.scss';

function Scoreboard({ score }) {
  return (
    <div className={styles.wrapper}>
      <span>Games won: </span>
      <span>{score}</span>
    </div>
  );
}

export default Scoreboard;
