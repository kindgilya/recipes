import React, { useState } from 'react';
import styles from "./tabs.module.scss";
import cn from 'classnames';

/* 

react 2 типа компоненетов
(mini ui kit)
- ui
  input
  button
  tabs
  ListGroup
  ListGroupItem

- конкретные компоненты под проект (под бизнес логику)
  RecipiesList
  Recipe

*/

const Tabs = ({children, startActive = 0}) => {
  const [isActive, setIsActive] = useState(startActive);

  const newChildren = children.map((el, i) => {
    return {
      ...el,
      props: {
        ...el.props,
        active: i === isActive ? true : false
      }
    }
  });

  return (
    <div className={cn(styles['tabs'])}>
        <div className={cn(styles["tabs__control"])}>
          {
            children.map((el,i) => {
              return <span className={cn(styles["tabs__control-item"], i === isActive ? styles["tabs__control-item--active"] : "")} key={i} onClick={() => setIsActive(i)}>{el.props.title}</span>
            })
          }
        </div>
		<div className={cn(styles["tabs__content"])}>
      {
        newChildren
      }
    </div>
    </div>
  )
}

export default Tabs