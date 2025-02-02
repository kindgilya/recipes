import styles from "./recipe.module.scss";
import Tag from "../Tag/Tag";
import cn from 'classnames';

const Recipe = () => {
  return (
    <div className={cn(styles["recipe"])}>
        <div className={cn(styles["recipe__img-wrapper"])}>
            <img className={cn(styles["recipe__img"])} src="https://media.dodostatic.net/image/r:584x584/11ef9c1daafcf3529a62947b9522a8fe.png" alt="" />
        </div>
        <div className={cn(styles["recipe__content"])}>
        <h3 className={cn(styles["recipe__title"])}>Classic Margherita Pizza</h3>
        <span className={cn(styles["recipe__raiting"])}>raiting: 4.6</span>
        <div className={cn(styles["recipe__tags-wrapper"])}>
            <Tag text="Pizza"/>
            <Tag text="Italian"/>
        </div>
        </div>
    </div>
  )
}

export default Recipe