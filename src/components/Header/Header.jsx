import React from 'react'
import styles from "./header.module.scss";
import cn from 'classnames';
import Search from '../Search/Search';


const Header = ({setSearchText, searchText}) => {
  return (
    <header className='header' style={{backgroundColor:'#f3f', height: '80px'}}>
        <Search setSearchText={setSearchText} searchText={searchText}/>
    </header>
  )
}


export default Header