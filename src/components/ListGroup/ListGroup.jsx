import React, { useContext } from 'react'
import styles from "./listgroup.module.scss";
import cn from 'classnames';
import { ThemeContext } from '../../context/ThemeContext';

const ListGroup = ({use = 'ul', children}) => {
  const Tag = use === 'ol' ? 'ol' : 'ul';
  return <Tag className={cn(styles["list-group"])}>{children}</Tag>;
};

const Item = ({children}) => {
  const { theme } = useContext(ThemeContext);
  return <li className={cn(styles['list-group-item'], theme === 'dark' && styles['list-group-item--dark'])}>{children}</li>;
};

ListGroup.Item = Item;

export default ListGroup;