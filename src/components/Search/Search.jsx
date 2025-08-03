import React from 'react'
import styles from "./search.module.scss";
import cn from 'classnames';
import Input from '../Input/Input';

const Search = ({setSearchText, searchText}) => {
  return (
    <div className={cn(styles["search"])}>
      <svg 
        className={cn(styles["search__icon"])}
        width="20" 
        height="20" 
        viewBox="0 0 20 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" 
          stroke="#666" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M19 19L14.65 14.65" 
          stroke="#666" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
        <Input type='text' placeholder='search title...' handler={setSearchText} searchText={searchText} name='search'/>
    </div>
  )
}

export default React.memo(Search)