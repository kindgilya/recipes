import React from 'react'
import styles from "./modal.module.scss";
import cn from 'classnames';
import Button from '../Button/Button';
import { IoClose } from "react-icons/io5";

const Modal = ({children}) => {
  return (
    <div className={cn(styles['modal'])}>
        <div className={cn(styles["modal__wrapper"])}>
            <div className={cn(styles["modal__content"])}>
            {children}
            </div>
            <div className={cn(styles["modal__btn"])}>
			<Button use='transparent' handler={() => {}}>
            <IoClose />
            </Button>
            </div>
        </div>
    </div>
  )
}

export default Modal