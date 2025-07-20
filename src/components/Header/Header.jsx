import React, { useContext } from 'react'
import styles from "./header.module.scss";
import cn from 'classnames';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { ThemeContext } from '../../context/ThemeContext';


const Header = ({setSearchText, searchText}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={cn(styles['header'], theme === 'dark' && styles['header--dark'])}>
      <div className={cn(styles['header__container'], theme === 'dark' && styles['header__container--dark'])}>
        <Logo />
        <Search setSearchText={setSearchText} searchText={searchText}/>
        <ToggleTheme />
      </div>
    </header>
  )
}


export default Header