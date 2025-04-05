import React, { useEffect } from 'react'
import styles from "./modal.module.scss";
import cn from 'classnames';
import Button from '../Button/Button';
import { IoClose } from "react-icons/io5";

const Modal = ({children, onClose, isOpen = false}) => {
  
    useEffect(() => {
        const handleKeyPress = (e) => {
          if (e.key === 'Escape' && isOpen) {
            onClose();
          }
        };
    
        if (isOpen) {
          document.addEventListener('keydown', handleKeyPress);
        }
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [isOpen, onClose]);

  return (
    <div className={cn(styles['modal'], isOpen ? styles["modal--active"] : "")} onClick={onClose} >
        <div className={cn(styles["modal__wrapper"])} onClick={(e) => e.stopPropagation()}>
            <div className={cn(styles["modal__content"])}>
            {children}
            </div>
            <div className={cn(styles["modal__btn"])}>
			<Button use='transparent' handler={onClose}>
            <IoClose />
            </Button>
            </div>
        </div>
    </div>
  )
}

export default Modal