import React from 'react'
import styles from "./input.module.scss";
import cn from 'classnames';

const Input = ({type, placeholder, handler, value, name}) => {
	return (
    <input className={cn(styles["search__input"])} type={type} placeholder={placeholder} onInput={(e) => handler(e.target.value)} value={value} name={name}/>
  )
}

export default Input