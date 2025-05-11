import React from 'react'
import styles from './Loader.module.scss'
import cn from 'classnames';

const Loader = () => (
  <div className={cn(styles['spinner'])}>
    <div className={cn(styles['spinner__inner'])}></div>
  </div>
)

export default Loader