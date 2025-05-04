import React from 'react'
import styles from "./filter.module.scss";
import cn from 'classnames';

const Form = ({method='POST', action='#', reload, handler, children}) => {
	const formHandler = (e) => {
        if (reload !== undefined) {
            e.preventDefault();
        }

		const data = new FormData(e.target);
		console.log(data);
    }

  return (
    <form className='form' method={method} action={action} onSubmit={formHandler}>{children}</form>
  )
}

export default Form