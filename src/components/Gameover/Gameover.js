import React from 'react';
import styles from './Gameover.module.scss';
import { SettingsContext } from '../../context/SettingsContext';

const Gameover = ({ handleClick, isVisible }) => {
  return (
    <div
      className={
        isVisible ? styles.wrapper : `${styles.wrapper} ${styles.hidden}`
      }
    >
      <SettingsContext.Consumer>
        {(context) => {
          return (
            <p className={styles.header}>
              Congratulations {context.name},
              <br />
              you won!
            </p>
          );
        }}
      </SettingsContext.Consumer>
      <button className={styles.button} onClick={handleClick}>
        Start again
      </button>
    </div>
  );
};

export default Gameover;
