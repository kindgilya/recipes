import React from 'react'
import styles from "./search.module.scss";
import cn from 'classnames';
import Input from '../Input/Input';

const Search = ({setSearchText, searchText}) => {
  return (
    <div className='search'>
        <Input type='text' placeholder='search title...' handler={setSearchText} searchText={searchText}/>
    </div>
  )
}

export default Search