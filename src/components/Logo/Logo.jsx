import React, { useContext } from 'react'
import styles from './logo.module.scss';
import cn from 'classnames';
import { ThemeContext } from '../../context/ThemeContext';

const Logo = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={cn(styles['logo'])}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M20 5C11.716 5 5 11.716 5 20C5 28.284 11.716 35 20 35C28.284 35 35 28.284 35 20C35 11.716 28.284 5 20 5ZM20 32.5C13.107 32.5 7.5 26.893 7.5 20C7.5 13.107 13.107 7.5 20 7.5C26.893 7.5 32.5 13.107 32.5 20C32.5 26.893 26.893 32.5 20 32.5Z" 
          fill="#4CAF50"
        />
        <path 
          d="M25 15H15C14.172 15 13.5 15.672 13.5 16.5V23.5C13.5 24.328 14.172 25 15 25H25C25.828 25 26.5 24.328 26.5 23.5V16.5C26.5 15.672 25.828 15 25 15ZM24 22.5H16V17H24V22.5Z" 
          fill="#4CAF50"
        />
        <path 
          d="M18 19H22V21H18V19Z" 
          fill="#4CAF50"
        />
      </svg>
      <span className={cn(styles['logo__text'], theme === 'dark' && styles['logo__text--dark'])}>RecipeBook</span>
    </div>
  );
};

export default Logo; 