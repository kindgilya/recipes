import styles from "./recipe.module.scss";
import Tag from "../Tag/Tag";
import cn from 'classnames';
import Tabs from "../Tabs/Tabs";

const Recipe = ({id,name,rating,tags,image,ingredients,instructions}) => {
  return (
    <div className={cn(styles["recipe"])}>
        <div className={cn(styles["recipe__img-wrapper"])}>
            <img className={cn(styles["recipe__img"])} src={image} alt="" />
        </div>
        <div className={cn(styles["recipe__content"])}>
        <h3 className={cn(styles["recipe__title"])}>{name}</h3>
        <span className={cn(styles["recipe__raiting"])}>raiting: {rating}</span>
        <Tabs ingredients={ingredients} instructions={instructions}/>
        <div className={cn(styles["recipe__tags-wrapper"])}>
            {
                tags.map((el) => {
                    return <Tag text={el}/>
                })
            }
            {/* <Tag text="Pizza"/>
            <Tag text="Italian"/> */}
        </div>
        </div>
    </div>
  )
}
// {"id":1,"name":"Classic Margherita Pizza","ingredients":["Pizza dough","Tomato sauce","Fresh mozzarella cheese",
// "Fresh basil leaves","Olive oil","Salt and pepper to taste"],"instructions":["Preheat the oven to 475°F (245°C).","Roll out the pizza dough and spread tomato sauce evenly.","Top with slices of fresh mozzarella and fresh basil leaves.","Drizzle with olive oil and season with salt and pepper.","Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.","Slice and serve hot."],
// "prepTimeMinutes":20,"cookTimeMinutes":15,"servings":4,"difficulty":"Easy","cuisine":"Italian","caloriesPerServing":300,
// "tags":["Pizza","Italian"],"userId":166,"image":"https://cdn.dummyjson.com/recipe-images/1.webp",
// "rating":4.6,"reviewCount":98,"mealType":["Dinner"]},
export default Recipe