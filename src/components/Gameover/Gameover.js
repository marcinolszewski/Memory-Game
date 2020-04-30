import React from 'react';
import styles from './Gameover.module.scss';
import { SettingsContext } from '../../context/SettingsContext';
import MenuBtn from '../MenuBtn/MenuBtn';

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
      <MenuBtn
        btnStyle={'special'}
        handleOnClick={handleClick}
        data-test="button"
      >
        Start again
      </MenuBtn>
    </div>
  );
};

export default Gameover;
