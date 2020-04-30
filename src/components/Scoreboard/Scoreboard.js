import React from 'react';
import styles from './Scoreboard.module.scss';
import { SettingsContext } from '../../context/SettingsContext';

function Scoreboard({ score, steps }) {
  return (
    <SettingsContext.Consumer>
      {(context) => {
        const themeContext = context.gameBackground;
        const darkTheme = { color: '#fff' };
        return (
          <div className={styles.wrapper}>
            <p
              className={styles.scoreLabel}
              style={themeContext === 'dark' ? darkTheme : null}
            >
              Games won: <span data-test="scores">{score}</span>
            </p>
            <p
              className={styles.scoreLabel}
              style={themeContext === 'dark' ? darkTheme : null}
            >
              Steps: <span data-test="steps">{steps}</span>
            </p>
          </div>
        );
      }}
    </SettingsContext.Consumer>
  );
}

export default Scoreboard;
