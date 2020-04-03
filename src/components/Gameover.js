import React from 'react';
import styles from './Gameover.module.scss';

const Gameover = ({ handleClick, isVisible }) => {
  return (
    <div className={isVisible ? styles.wrapper : styles.hidden}>
      <p className={styles.header}>Gratulacje, wygrałeś!</p>
      <button onClick={handleClick}>Rozpocznij od nowa</button>
    </div>
  );
};

export default Gameover;
