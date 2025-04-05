import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";
import Recipe from "../Recipe/Recipe";
import styles from "./recipieslist.module.scss";
import cn from 'classnames';
import { useState } from "react";
import Button from "../Button/Button";

const RecepiesList = ({recipes, skipHandler, countLoadedRecipes}) => {
  const [activeModalImage, setActiveModalImage] = useState('');

  const handleImageClick = (img) => {
    setActiveModalImage(img);
  };

  const closeModal = () => {
    setActiveModalImage('');
  };

  return (
    <div className={cn(styles['recepies-list'])}>
      <div className={cn(styles["recepies-list__main"])}>
        {
          recipes.length > 0 ? recipes.map((el) => {
            return <Recipe id={el.id} key={el.id} name={el.name} rating={el.rating} tags={el.tags} image={el.image} ingredients={el.ingredients} instructions={el.instructions} handler={handleImageClick}/>
           }) : 'recepies empty'
        }
      </div>
        <div className={cn(styles["recepies-list__btn-show-more"])}>
          <Button use={'primary'} handler={skipHandler}>
            loaded({countLoadedRecipes}), show more
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