import React from 'react'
import styles from "./header.module.scss";
import cn from 'classnames';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';


const Header = ({setSearchText, searchText}) => {
  return (
    <header className={cn(styles['header'])}>
      <div className={cn(styles['header__container'])}>
        <Logo />
        <Search setSearchText={setSearchText} searchText={searchText}/>
      </div>
    </header>
  )
}


export default Header