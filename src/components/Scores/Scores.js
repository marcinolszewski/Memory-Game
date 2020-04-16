import React, { useState } from 'react';
import '../../Globals.scss';
import * as firebase from 'firebase/app';
import 'firebase/database';

const Scores = ({ showMenu }) => {
  const [scores, setScores] = useState(0);

  const database = firebase.database();

  const data = database
    .ref('scores')
    .once('value')
    .then((snapshot) => {
      const data = snapshot.val();
      const sortedData = Object.keys(data)
        .sort((a, b) => data[a].steps - data[b].steps)
        .map((key) => data[key]);

      sortedData.map((el) => setScores({ name: el.name, score: el.score }));
    });

  return (
    <div className="menu__wrapper">
      <ul className="menu">
        <button className="menu__btnBack" onClick={() => showMenu()}>
          BACK
        </button>
      </ul>
    </div>
  );
};

export default Scores;
