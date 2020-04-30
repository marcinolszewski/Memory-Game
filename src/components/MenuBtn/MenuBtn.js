import React from 'react';
import styles from './MenuBtn.module.scss';

const MenuBtn = ({ btnStyle, handleOnClick, children }) => {
  let btnTheme;

  switch (btnStyle) {
    case 'back':
      btnTheme = styles.menu__returnBtn;
      break;
    case 'special':
      btnTheme = styles.menu__specialBtn;
      break;
    default:
      btnTheme = styles.menu__btn;
      break;
  }
  return (
    <button className={btnTheme} onClick={handleOnClick} data-test="menuBtn">
      {children}
    </button>
  );
};

export default MenuBtn;
