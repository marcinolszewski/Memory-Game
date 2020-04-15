import React from 'react';
import styles from './Scoreboard.module.scss';
import { SettingsContext } from '../../context/SettingsContext';

function Scoreboard({ score, steps }) {
  return (
    <div className={styles.wrapper}>
      <SettingsContext.Consumer>
        {(context) => {
          const themeContext = context.gameBackground;
          const darkTheme = { color: '#fff' };
          return (
            <>
              <p
                className={styles.scoreLabel}
                style={themeContext === 'dark' ? darkTheme : null}
              >
                Games won: <span>{score}</span>
              </p>
              <p
                className={styles.scoreLabel}
                style={themeContext === 'dark' ? darkTheme : null}
              >
                Steps: <span>{steps}</span>
              </p>
            </>
          );
        }}
      </SettingsContext.Consumer>
    </div>
  );
}

export default Scoreboard;
