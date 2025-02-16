import React from 'react'
import styles from "./listGroupItem.module.scss";
import cn from 'classnames';

const ListGroupItem = ({children}) => {
  return (
    <li className={cn(styles['list-group-item'])}>{children}</li>
  )
}

export default ListGroupItem