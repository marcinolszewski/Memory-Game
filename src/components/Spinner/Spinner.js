import React from 'react';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div data-test="spinnerWrapper" className={styles.spinner__wrapper}>
      <div data-test="spinner" className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;
