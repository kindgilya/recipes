import React, { useState } from 'react'
import styles from "./input.module.scss";
import cn from 'classnames';

const Input = ({type, placeholder, handler}) => {
	const [value, setValue]= useState('');

	const inputHandler = (e) => {
        setValue(e.target.value);
        handler(e.target.value);
  }

	return (
    <input className='input' type={type} placeholder={placeholder} onInput={inputHandler} value={value}/>
  )
}

export default Input