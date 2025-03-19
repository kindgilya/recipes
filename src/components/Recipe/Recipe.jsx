import styles from "./recipe.module.scss";
import Tag from "../Tag/Tag";
import cn from 'classnames';
import Tabs from "../Tabs/Tabs";
import Tab from "../Tab/Tab";
import ListGroup from "../ListGroup/ListGroup";
import ListGroupItem from "../ListGroupItem/ListGroupItem";
import Collaps from "../Collaps/Collaps";
import { useState } from "react";

const Recipe = ({id,name,rating,tags,image,ingredients,instructions}) => {
    const [isActiveIngredientsList, setIsActiveIngredientsList] = useState(false);
    const [isActiveStepsList, setIsActiveStepsList] = useState(false);
  return (
    <div className={cn(styles["recipe"])}>
        <div className={cn(styles["recipe__img-wrapper"])}>
            <img className={cn(styles["recipe__img"])} src={image} alt="" />
        </div>
        <div className={cn(styles["recipe__content"])}>
        <h3 className={cn(styles["recipe__title"])}>{name}</h3>
        <span className={cn(styles["recipe__raiting"])}>raiting: {rating}</span>
        <Tabs>
            <Tab title="Steps">
                <div className="recipe__list-wrapper" onClick={() => setIsActiveStepsList(!isActiveStepsList)}>
                    <Collaps maxHeight={100} active={isActiveStepsList}>
                <ListGroup use="ul">
                {instructions.map((text,i) => <ListGroupItem key={i}>{text}</ListGroupItem>)}
                </ListGroup>
                </Collaps>
                </div>
            </Tab>
            <Tab title="Ingredients">
                    <div className="recipe__list-wrapper" onClick={() => setIsActiveIngredientsList(!isActiveIngredientsList)}>
                <Collaps maxHeight={100} active={isActiveIngredientsList}>
            <ListGroup use="ul">
                {ingredients.map((text,i) => <ListGroupItem key={i}>{text}</ListGroupItem>)}
            </ListGroup>
                </Collaps>
                    </div>
            </Tab>
        </Tabs>
        <div className={cn(styles["recipe__tags-wrapper"])}>
            {
                tags.map((el,i) => {
                    return <Tag text={el} key={i}/>
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