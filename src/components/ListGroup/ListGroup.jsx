import React from 'react'
import styles from "./listgroup.module.scss";
import cn from 'classnames';

const ListGroup = ({use, children}) => {
	const getTag = () => {
		if (use === 'ul') {
			return <ul className={cn(styles["list-group"])}>{children}</ul>
		}
        if (use === 'ol') {
			return <ol className={cn(styles["list-group"])}>{children}</ol>
		}
	}

  return (getTag())
}

export default ListGroup