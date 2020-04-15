import React from 'react';
import styles from './Background.module.scss';
import dino1 from '../../assets/background/tard.png';
import dino2 from '../../assets/background/mort.png';
import dino3 from '../../assets/background/doux.png';
import { SettingsContext } from '../../context/SettingsContext';

const Background = (props) => {
  return (
    <SettingsContext.Consumer>
      {(context) => {
        const themeContext = context.gameBackground;
        const darkTheme = { filter: 'brightness(0.3)' };
        const isDarkTheme = themeContext === 'dark';

        return (
          <div className={styles.wrapper}>
            <div
              className={styles.sky}
              style={themeContext === 'dark' ? darkTheme : null}
            ></div>
            <div
              className={styles.clouds}
              style={themeContext === 'dark' ? darkTheme : null}
            ></div>
            <div
              className={styles.secondaryClouds}
              style={themeContext === 'dark' ? darkTheme : null}
            ></div>
            <div
              className={styles.sea}
              style={themeContext === 'dark' ? darkTheme : null}
            ></div>
            <div
              className={styles.sea1}
              style={themeContext === 'dark' ? darkTheme : null}
            ></div>
            <div
              className={styles.grounds}
              style={themeContext === 'dark' ? darkTheme : null}
            ></div>
            <div
              className={styles.grounds1}
              style={themeContext === 'dark' ? darkTheme : null}
            ></div>

            <div
              className={
                isDarkTheme
                  ? `${styles.moon} ${styles.moonShown}`
                  : `${styles.moon}`
              }
            ></div>

            <div className={styles.rockTree3__wrapper}>
              <div className={styles.rockTree3}>
                <div className={styles.dino2Wrapper}>
                  <img src={dino2} alt="Dino" />
                </div>
                <div className={styles.flyingHugeGround1}></div>
                <div className={styles.flyingHugeGround2}></div>
                <div className={styles.flyingHugeGround2__a}></div>
                <div className={styles.flyingHugeGround2__b}></div>
                <div className={styles.flyingHugeGround3}></div>
                <div className={styles.flyingHugeGround4}></div>
              </div>
            </div>

            <div className={styles.rockTree1__wrapper}>
              <div className={styles.rockTree1}>
                <div className={styles.dino1Wrapper}>
                  <img src={dino1} alt="Dino" />
                </div>
                <div className={styles.flyingRock}></div>
                <div className={styles.flyingTree}></div>
              </div>
            </div>

            <div className={styles.rockTree2__wrapper}>
              <div className={styles.rockTree2}>
                <div className={styles.dino3Wrapper}>
                  <img src={dino3} alt="Dino" />
                </div>
                <div className={styles.flyingRock}></div>
                <div className={styles.flyingTree}></div>
              </div>
            </div>

            {props.children}
          </div>
        );
      }}
    </SettingsContext.Consumer>
  );
};

export default Background;
