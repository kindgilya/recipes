import React from 'react'
import styles from "./filter.module.scss";
import cn from 'classnames';
import Form from '../Form/Form';
import Input from '../Input/Input';

const Filter = ({handler}) => {
	const ratingHandler = (value) => {
		console.log(value);
	}

	const servingsHandler = (value) => {
		console.log(value);
	}

  return (
    <div className='filter'>
        <Form handler={handler}>
            <Input type='range' handler={ratingHandler} value={5} name='raiting'/>
            <Input type='number' handler={servingsHandler} value={2} name='servings'/>
            <Input type='color' handler={servingsHandler} value={"#ff00ff"} name='color'/>
            <Input type='date' handler={servingsHandler} value={"2025-05-12"} name='date'/>
						<textarea name="message" placeholder='text...'></textarea>
						<button type="submit">filter</button>
        </Form>
    </div>
  )
}

export default Filter