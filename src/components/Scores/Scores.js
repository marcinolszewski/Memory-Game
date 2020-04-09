import React from 'react';
import '../../Globals.scss';

const Scores = ({ showMenu }) => {
  return (
    <div className="menu__wrapper">
      <ul className="menu">
        <button className="menu__btnBack" onClick={() => showMenu()}>
          BACK
        </button>
        <li>ALA</li>
        <li>OLA</li>
        <li>ZOS</li>
        <li>ZUZ</li>
        <li>MAR</li>
      </ul>
    </div>
  );
};

export default Scores;
