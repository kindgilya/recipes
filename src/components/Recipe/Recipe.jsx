import styles from "./recipe.module.css";
import Tag from "../Tag/Tag";

const Recipe = () => {
  return (
    <div className="recipe">
        <div className="recipe__img-wrapper">
            <img className="recipe__img" src="" alt="" />
        </div>
        <h3 className="recipe__title">Classic Margherita Pizza</h3>
        <span className="recipe__raiting">raiting: 4.6</span>
        <div className="recipe__tags-wrapper">
            <Tag text="Pizza"/>
            <Tag text="Italian"/>
        </div>
    </div>
  )
}

export default Recipe