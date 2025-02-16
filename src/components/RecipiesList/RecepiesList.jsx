import Recipe from "../Recipe/Recipe";
import styles from "./recipieslist.module.scss";
import cn from 'classnames';

const RecepiesList = ({recipes}) => {
  return (
    <div className={cn(styles['recepies-list'])}>
        {
          recipes !== null ? recipes.recipes.map((el) => {
            console.log(el);
            return <Recipe id={el.id} name={el.name} rating={el.rating} tags={el.tags} image={el.image} ingredients={el.ingredients} instructions={el.instructions}/>
           }) : 'recepies empty'
        }
    </div>
  )
}
export default RecepiesList;