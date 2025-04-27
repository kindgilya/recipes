import React from 'react'
import styles from "./header.module.scss";
import cn from 'classnames';
import Input from '../Input/Input';


const Header = () => {
  return (
    <header className='header' style={{backgroundColor:'#f3f', height: '80px'}}>
        <Input type='text' placeholder='search title...' handler={(text) => console.log(text)}/>
    </header>
  )
}

/* 

ДЗ:

надо создать компонент логотип svg

*/

export default Header