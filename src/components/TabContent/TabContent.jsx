import React from 'react';
import styles from "./tabContent.module.scss";
import cn from 'classnames';

const TabContent = ({active, children}) => {
  return (
    <div className={cn(styles["tab-content"], active ? styles["tab-content--active"] : "")}>{children}</div>
  )
}

export default TabContent;