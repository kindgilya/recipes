import Recipe from "../Recipe/Recipe";
import styles from "./recipieslist.module.scss";

const RecepiesList = ({recipes}) => {
  return (
    <div className='recepies-list'>
        {
          recipes !== null ? recipes.recipes.map((el) => {
            return <Recipe id={el.id} name={el.name} rating={el.rating} tags={el.tags} image={el.image}/>
           }) : 'recepies empty'
        }
    </div>
  )
}
export default RecepiesList;