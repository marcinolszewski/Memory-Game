import React from 'react';
import styles from './MenuBtn.module.scss';

const MenuBtn = (props) => {
  return (
    <button className={styles.menu__btn} onClick={props.handleOnClick}>
      {props.children}
    </button>
  );
};

export default MenuBtn;
