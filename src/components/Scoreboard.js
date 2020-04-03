import React from 'react';
import styles from './Scoreboard.module.scss';

function Scoreboard({ score }) {
  return (
    <div className={styles.wrapper}>
      <span>Ilość wygranych gier:</span>
      <span>{score}</span>
    </div>
  );
}

export default Scoreboard;
