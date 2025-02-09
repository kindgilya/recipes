import React from 'react';
import styles from "./tabs.module.scss";
import cn from 'classnames';


const Tabs = () => {
  return (
    <div className='tabs'>
        <div className="tabs__control"></div>
		<div className="tabs__content">
            <div className="tab-content">content1</div>
            <div className="tab-content">content2</div>
        </div>
    </div>
  )
}

export default Tabs