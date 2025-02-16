import React, { useState } from 'react';
import styles from "./tabs.module.scss";
import cn from 'classnames';
import Tab from '../Tab/Tab';
import TabContent from '../TabContent/TabContent';
import ListGroup from '../ListGroup/ListGroup';
import ListGroupItem from '../ListGroupItem/ListGroupItem';

const Tabs = ({ingredients,instructions}) => {
    const [isActive, setIsActive] = useState(1);
    
  return (
    <div className={cn(styles['tabs'])}>
        <div className={cn(styles["tabs__control"])}>
            <Tab text="Steps" active={isActive === 1} handler={() => setIsActive(1)}/>
            <Tab text="Ingridients" active={isActive === 2} handler={() => setIsActive(2)}/>
        </div>
		<div className={cn(styles["tabs__content"])}>
            <TabContent active={isActive === 1} >
              <ListGroup use="ul">
							{ingredients.map((text) => {
                return <ListGroupItem>{text}</ListGroupItem>
              })}
              </ListGroup>
						</TabContent>
            <TabContent active={isActive === 2} >
							{instructions}
						</TabContent>
        </div>
    </div>
  )
}

export default Tabs