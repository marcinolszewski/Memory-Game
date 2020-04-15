import React from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import styles from './MenuElements.module.scss';
import MenuBtn from '../MenuBtn/MenuBtn';

const MenuElements = ({ changeMenu }) => {
  const menuValues = [
    {
      title: 'Start Game',
      function: 'newGame',
    },
    {
      title: 'Settings',
      function: 'settings',
    },
    {
      title: 'Scores',
      function: 'scores',
    },
  ];
  return (
    <div className={styles.menu__wrapper}>
      <div className={styles.menu}>
        <SettingsContext.Consumer>
          {(context) => {
            return (
              <h1 className={styles.menu__header}>
                Hello <br /> {context.name}
              </h1>
            );
          }}
        </SettingsContext.Consumer>
        {menuValues.map((menuVal, idx) => {
          return (
            <MenuBtn
              handleOnClick={() => changeMenu(menuVal.function)}
              key={idx}
            >
              {menuVal.title}
            </MenuBtn>
          );
        })}
      </div>
    </div>
  );
};

export default MenuElements;
