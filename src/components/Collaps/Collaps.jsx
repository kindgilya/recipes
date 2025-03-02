import React from 'react'
import styles from "./collaps.module.scss";
import cn from 'classnames';

const Collaps = ({children, active = false, maxHeight = 100}) => {
  return (
    <div className={cn(styles["collaps"], active ? styles["collaps--active"] : "")} style={{height: !active ? `${maxHeight}px` : 'auto'}}>
        {children}
    </div>
  )
}


export default Collaps