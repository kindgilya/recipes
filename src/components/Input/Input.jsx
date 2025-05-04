import React from 'react'
import styles from "./input.module.scss";
import cn from 'classnames';

const Input = ({type, placeholder, handler, value}) => {
	return (
    <input className='input' type={type} placeholder={placeholder} onInput={(e) => handler(e.target.value)} value={value}/>
  )
}

export default Input