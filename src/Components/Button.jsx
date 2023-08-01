import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, onclick }) => {
  return (
    <button className={styles.btn} onClick={onclick}>
      {text}
    </button>
  );
};

export default Button;
