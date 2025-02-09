import React from 'react';
import styles from "./tabs.module.scss";
import cn from 'classnames';
import Tab from '../Tab/Tab';
import TabContent from '../TabContent/TabContent';

const Tabs = () => {
  return (
    <div className={cn(styles['tabs'])}>
        <div className={cn(styles["tabs__control"])}>
            <Tab text="Steps" active />
            <Tab text="Ingridients" />
        </div>
		<div className={cn(styles["tabs__content"])}>
            <TabContent text="content1" active />
            <TabContent text="content2" />
        </div>
    </div>
  )
}

export default Tabs