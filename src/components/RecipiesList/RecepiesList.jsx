import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";
import Recipe from "../Recipe/Recipe";
import styles from "./recipieslist.module.scss";
import cn from "classnames";
import { useEffect, useState, useContext } from "react";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import { ThemeContext } from "../../context/ThemeContext";
import RecipeSkeleton from "../RecipeSkeleton/RecipeSkeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipes,
  selectFilteredRecipes,
  selectRecipesStatus,
  selectTotalRecipes,
  selectLoadedRecipes,
} from "../../feachers/recipesSlice";

const RecepiesList = () => {
  const [activeModalImage, setActiveModalImage] = useState("");
  const { theme } = useContext(ThemeContext);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const totalRecipes = useSelector(selectTotalRecipes);
  const recipesStatus = useSelector(selectRecipesStatus);
  const filteredRecipes = useSelector(selectFilteredRecipes);
  const loadedRecipes = useSelector(selectLoadedRecipes);

  useEffect(() => {
    dispatch(fetchRecipes(page));
  }, [dispatch, page]);

  const pageHandler = () => {
    if (page * 10 < totalRecipes) {
      setPage((prev) => prev + 1);
    }
  };

  const isCheckTotal = () => page * 10 < totalRecipes;

  const handleImageClick = (img) => {
    setActiveModalImage(img);
  };

  const closeModal = () => {
    setActiveModalImage("");
  };

  const getRandomId = () => Math.random().toString(36).substring(2, 6);

  return (
    <div className={cn(styles["recepies-list"])}>
      <div className={cn(styles["recepies-list__main"])}>
        {filteredRecipes.length > 0
          ? filteredRecipes.map((el) => {
              return (
                <Recipe
                  id={el.id}
                  key={getRandomId()}
                  name={el.name}
                  rating={el.rating}
                  tags={el.tags}
                  image={el.image}
                  ingredients={el.ingredients}
                  instructions={el.instructions}
                  handler={handleImageClick}
                />
              );
            })
          : Array(10)
              .fill(undefined)
              .map((_) => <RecipeSkeleton key={getRandomId()} />)}
      </div>
      <div className={cn(styles["recepies-list__btn-show-more"])}>
        <Button
          use={theme === "dark" ? "loaded-dark" : "loaded"}
          handler={pageHandler}
          disabled={recipesStatus === "loading" || !isCheckTotal()}
        >
          {recipesStatus === "loading" ? (
            <div style={{ display: "flex", gap: "10px" }}>
              load...
              <div style={{ width: "15px", height: "15px" }}>{<Loader />}</div>
            </div>
          ) : (
            `Loaded (${loadedRecipes}), ${
              isCheckTotal() ? "show more" : "all recipes loaded"
            } `
          )}
        </Button>
      </div>
      <div className="recepies-list__modal">
        {createPortal(
          <Modal
            onClose={closeModal}
            isOpen={activeModalImage != "" ? true : false}
          >
            <img src={activeModalImage} />
          </Modal>,
          document.body
        )}
      </div>
    </div>
  );
};
export default RecepiesList;
