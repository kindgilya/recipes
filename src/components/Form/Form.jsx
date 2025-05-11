import React from 'react'
import styles from "./form.module.scss";
import cn from 'classnames';

const Form = ({method='POST', action='#', reload, handler, children}) => {
	const formHandler = (e) => {
        if (reload === undefined) {
            e.preventDefault();
        }

		const data = new FormData(e.target);

    for (let [key, value] of data) {
  console.log(`${key} — ${value}`)
}
		// console.log(data.entries());
    }

  return (
    <form className='form' method={method} action={action} onSubmit={formHandler}>{children}</form>
  )
}

export default Form