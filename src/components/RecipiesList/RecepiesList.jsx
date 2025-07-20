import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";
import Recipe from "../Recipe/Recipe";
import styles from "./recipieslist.module.scss";
import cn from 'classnames';
import { useState, useContext } from "react";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import { ThemeContext } from '../../context/ThemeContext';

const RecepiesList = ({recipes, skipHandler, countLoadedRecipes, isLoading, totalRecipes}) => {
  const [activeModalImage, setActiveModalImage] = useState('');
  const { theme } = useContext(ThemeContext);

  const handleImageClick = (img) => {
    setActiveModalImage(img);
  };

  const closeModal = () => {
    setActiveModalImage('');
  };

  const getRandomId = () => Math.random().toString(36).substring(2, 6);

  return (
    <div className={cn(styles['recepies-list'])}>
      <div className={cn(styles["recepies-list__main"])}>
        {
          recipes.length > 0 ? recipes.map((el) => {
            return <Recipe id={el.id} key={getRandomId()} name={el.name} rating={el.rating} tags={el.tags} image={el.image} ingredients={el.ingredients} instructions={el.instructions} handler={handleImageClick}/>
           }) : 'recepies empty'
        }
      </div>
        <div className={cn(styles["recepies-list__btn-show-more"])}>
          <Button use={theme === 'dark' ? 'loaded-dark' : 'loaded'} handler={skipHandler}  disabled={isLoading}>
          {isLoading ? (
                <div style={{display: 'flex', gap: '10px'}}>load...<div style={{width: '15px', height: '15px'}}>{<Loader />}</div></div>
              ) : (
                `Loaded (${countLoadedRecipes}), show more`
              ) }
          </Button>
        </div>
        <div className="recepies-list__modal">
          {createPortal(<Modal onClose={closeModal}  isOpen={activeModalImage != '' ? true : false}>
            <img src={activeModalImage}/>
          </Modal>, document.body)}
        </div>
    </div>
  )
}
export default RecepiesList;