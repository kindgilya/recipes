import React from 'react';
import styles from "./tabContent.module.scss";
import cn from 'classnames';

const TabContent = ({text, active}) => {
  return (
    <div className={cn(styles["tab-content"], active ? styles["tab-content--active"] : "")}>{text}</div>
  )
}

export default TabContent;