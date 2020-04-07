import React from 'react';
import '../../Globals.scss';

const Settings = ({ showMenu }) => {
  return (
    <div className="menu__wrapper">
      <div className="menu">
        <button className="menu__btnBack" onClick={() => showMenu()}>
          Back
        </button>
        <button className="menu__btn">Animals</button>
        <button className="menu__btn">Frozen</button>
      </div>
    </div>
  );
};
export default Settings;
