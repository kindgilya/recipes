import styles from "./recipe.module.scss";
import Tag from "../Tag/Tag";
import cn from 'classnames';
import Tabs from "../Tabs/Tabs";
import Tab from "../Tab/Tab";
import ListGroup from "../ListGroup/ListGroup";
import Collaps from "../Collaps/Collaps";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ThemedTag from "../ThemedTag/ThemedTag";

const Recipe = ({id,name,rating,tags,image,ingredients,instructions,handler}) => {
    const [isActiveIngredientsList, setIsActiveIngredientsList] = useState(false);
    const [isActiveStepsList, setIsActiveStepsList] = useState(false);
    const {theme} = useContext(ThemeContext);

    const getRandomId = () => Math.random().toString(36).substring(2, 6);

  return (
    <div className={cn(styles["recipe"], theme === 'dark' && styles["recipe--dark"])}>
        <div className={cn(styles["recipe__img-wrapper"])}>
            <img className={cn(styles["recipe__img"])} src={image} alt=""  onClick={() => {handler(image);}}/>
        </div>
        <div className={cn(styles["recipe__content"])}>
        <h3 className={cn(styles["recipe__title"])}>{name}</h3>
        <span className={cn(styles["recipe__raiting"])}>raiting: {rating}</span>
        <Tabs>
            <Tab title="Steps">
                <div className="recipe__list-wrapper" onClick={() => setIsActiveStepsList(!isActiveStepsList)}>
                    <Collaps maxHeight={100} active={isActiveStepsList}>
                <ListGroup use="ul">
                {instructions.map((text,i) => <ListGroup.Item key={i}>{text}</ListGroup.Item>)}
                </ListGroup>
                </Collaps>
                </div>
            </Tab>
            <Tab title="Ingredients">
                    <div className="recipe__list-wrapper" onClick={() => setIsActiveIngredientsList(!isActiveIngredientsList)}>
                <Collaps maxHeight={100} active={isActiveIngredientsList}>
            <ListGroup use="ul">
                {ingredients.map((text,i) => <ListGroup.Item key={i}>{text}</ListGroup.Item>)}
            </ListGroup>
                </Collaps>
                    </div>
            </Tab>
        </Tabs>
        <div className={cn(styles["recipe__tags-wrapper"])}>
            {
                tags.map((el) => {
                    return <ThemedTag key={getRandomId()}>{el}</ThemedTag>
                })
            }
            {/* <Tag text="Pizza"/>
            <Tag text="Italian"/> */}
        </div>
        </div>
    </div>
  )
}

export default Recipe