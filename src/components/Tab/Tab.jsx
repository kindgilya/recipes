import React from 'react';
import styles from "./tab.module.scss";
import cn from 'classnames';

const Tab = ({text, active, handler}) => {
  return (
    <span className={cn(styles["tab"], active ? styles["tab--active"] : "")} onClick={handler}>{text}</span>
  )
}

export default Tab;