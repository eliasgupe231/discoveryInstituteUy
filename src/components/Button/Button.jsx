import React from 'react';
import styles from "./Button.module.css";

const Button = ({ variant = "default", children }) => {
  return (
    <button className={`${styles.base} ${styles[variant]}`}>
      {children}
    </button>
  );
};



export default Button