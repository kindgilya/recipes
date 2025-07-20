import React, { useContext } from 'react'
import styles from "./toggleTheme.module.scss";
import cn from 'classnames';
import Button from '../Button/Button';
import { ThemeContext } from '../../context/ThemeContext';

const ToggleTheme = () => {
  const {theme, themeToggle} = useContext(ThemeContext);

	console.log('rerender :(');
		
  return (
    <div className={styles['toggle-theme']} onClick={themeToggle}>
      <div className={styles['toggle-theme__track']}>
        <div className={cn(styles['toggle-theme__thumb'], theme === 'dark' && styles['toggle-theme__thumb--right'])} />
      </div>
    </div>
  )
}

export default ToggleTheme