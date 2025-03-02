import React from 'react';
import styles from "./tab.module.scss";
import cn from 'classnames';

const Tab = ({children, active}) => {
  return (
    <div className={cn(styles["tab"], active ? styles["tab--active"] : "")}>
      {children}
    </div>
  )
}

export default Tab;