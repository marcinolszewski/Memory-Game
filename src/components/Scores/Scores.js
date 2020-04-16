import React, { useState, useEffect, useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import styles from './Scores.module.scss';
import '../../Globals.scss';
import * as firebase from 'firebase/app';
import Spinner from '../Spinner/Spinner';

const Scores = ({ showMenu }) => {
  const [scores, setScores] = useState([]);
  const [spinner, toggleSpinner] = useState({ spinnerVisible: true });
  const context = useContext(SettingsContext);
  const database = firebase.database();

  useEffect(() => {
    database
      .ref('scores')
      .once('value')
      .then((snapshot) => {
        const data = snapshot.val();
        const sortedData = Object.keys(data)
          .sort((a, b) => data[a].steps - data[b].steps)
          .map((key) => data[key]);
        toggleSpinner({ spinnerVisible: false });
        setScores(sortedData);
      });
  }, []);

  return (
    <div className="menu__wrapper">
      <div className="menu">
        <button className="menu__btnBack" onClick={() => showMenu()}>
          BACK
        </button>
        <table className={styles.table}>
          <thead>
            <tr className={styles.table__header}>
              <th>No:</th>
              <th>Name:</th>
              <th>Steps:</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((el, idx) => {
              return (
                <tr
                  key={idx}
                  className={`${styles.table__row} ${
                    context.gameBackground === 'dark' ? styles.dark : ''
                  }`}
                >
                  <td>{idx + 1}.</td>
                  <td>{el.name}</td>
                  <td>{el.steps}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {spinner.spinnerVisible ? <Spinner /> : null}
      </div>
    </div>
  );
};

export default Scores;
