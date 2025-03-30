import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";
import Recipe from "../Recipe/Recipe";
import styles from "./recipieslist.module.scss";
import cn from 'classnames';

const RecepiesList = ({recipes}) => {
  return (
    <div className={cn(styles['recepies-list'])}>
        {
          recipes !== null ? recipes.recipes.map((el) => {
            return <Recipe id={el.id} key={el.id} name={el.name} rating={el.rating} tags={el.tags} image={el.image} ingredients={el.ingredients} instructions={el.instructions}/>
           }) : 'recepies empty'
        }
        <div className="recepies-list__modal">
          {createPortal(<Modal>
            hello
          </Modal>, document.body)}
        </div>
    </div>
  )
}
export default RecepiesList;