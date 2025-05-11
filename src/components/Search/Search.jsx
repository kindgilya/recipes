import React from 'react'
import styles from "./search.module.scss";
import cn from 'classnames';
import Input from '../Input/Input';

const Search = ({setSearchText, searchText}) => {
  return (
    <div className='search'>
        <Input type='text' placeholder='search title...' handler={setSearchText} searchText={searchText} name='search'/>
    </div>
  )
}

export default Search