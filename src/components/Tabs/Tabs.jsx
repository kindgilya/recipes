import React, { useState } from 'react';
import styles from "./tabs.module.scss";
import cn from 'classnames';
import Tab from '../Tab/Tab';
import TabContent from '../TabContent/TabContent';

const Tabs = () => {
    const [isActive, setIsActive] = useState(1);
    
  return (
    <div className={cn(styles['tabs'])}>
        <div className={cn(styles["tabs__control"])}>
            <Tab text="Steps" active={isActive === 1} handler={() => setIsActive(1)}/>
            <Tab text="Ingridients" active={isActive === 2} handler={() => setIsActive(2)}/>
        </div>
		<div className={cn(styles["tabs__content"])}>
            <TabContent active={isActive === 1} >
							content1
						</TabContent>
            <TabContent active={isActive === 2} >
							content2
						</TabContent>
        </div>
    </div>
  )
}

export default Tabs