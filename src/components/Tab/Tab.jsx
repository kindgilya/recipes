import React from 'react';
import styles from "./tab.module.scss";
import cn from 'classnames';

const Tab = ({text, active}) => {
  return (
    <span className={cn(styles["tab"], active ? styles["tab--active"] : "")}>{text}</span>
  )
}

export default Tab;