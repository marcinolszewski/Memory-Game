import React from 'react';
import styles from './MenuElements.module.scss';

const MenuElements = ({ changeMenu }) => {
  return (
    <div className={styles.menu__wrapper}>
      <div className={styles.menu}>
        <button
          className={styles.menu__btn}
          onClick={() => changeMenu('newGame')}
        >
          Start game
        </button>
        <button
          className={styles.menu__btn}
          onClick={() => changeMenu('settings')}
        >
          Settings
        </button>
        <button
          className={styles.menu__btn}
          onClick={() => changeMenu('scores')}
        >
          Scores
        </button>
      </div>
    </div>
  );
};

export default MenuElements;
