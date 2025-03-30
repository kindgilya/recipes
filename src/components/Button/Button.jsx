import React from "react";
import styles from "./button.module.scss";

// interface IButton {
//   children: React.ReactChild | React.ReactChildren,
//   use: string,
//   handler: () => void,
//   disabled?: boolean
// }

const Button = ({children, use, handler, disabled}) => {
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${use}`]}`}
      onClick={handler}
      disabled={disabled}
    >
    {children}
    </button>
  );
};

export default Button;
