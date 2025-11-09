import { useState, useContext } from "react";
import styles from "./Filter.module.scss";
import cn from "classnames";
import Button from "../Button/Button";
import { ThemeContext } from "../../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setFilterProp } from "../../feachers/filterSlice";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  // const handleFilterChange = (type, value) => {
  //   onFilterChange({
  //     ...currentFilters,
  //     [type]: value === "" ? "" : value
  //   });
  // };

  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilter);

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={cn(styles.filter, theme === "dark" && styles["filter--dark"])}
    >
      <Button
        use={theme === "dark" ? "filter-dark" : "filter"}
        handler={toggleFilters}
        // className={cn(styles['filter__toggle'])}
      >
        {isOpen ? "Hide filters" : "Show filters"}
        <span
          className={cn(styles["filter__arrow"], {
            [styles["filter__arrow--up"]]: isOpen,
          })}
        />
      </Button>

      {isOpen && (
        <div className={cn(styles["filter__content"])}>
          <div
            className={cn(
              styles["filter__group"],
              theme === "dark" && styles["filter__group--dark"]
            )}
          >
            <label
              htmlFor="difficulty"
              className={cn(
                styles["filter__label"],
                theme === "dark" && styles["filter__label--dark"]
              )}
            >
              Difficulty:
            </label>
            <select
              id="difficulty"
              className={cn(
                styles["filter__select"],
                theme === "dark" && styles["filter__select--dark"]
              )}
              value={currentFilters.difficulty || ""}
              onChange={(e) =>
                dispatch(
                  setFilterProp({ key: "difficulty", value: e.target.value })
                )
              }
            >
              <option value="">Any</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div
            className={cn(
              styles["filter__group"],
              theme === "dark" && styles["filter__group--dark"]
            )}
          >
            <label
              htmlFor="cookingTime"
              className={cn(
                styles["filter__label"],
                theme === "dark" && styles["filter__label--dark"]
              )}
            >
              Cooking time:
            </label>
            <select
              id="cookingTime"
              className={cn(
                styles["filter__select"],
                theme === "dark" && styles["filter__select--dark"]
              )}
              value={currentFilters.cookingTime || ""}
              onChange={(e) =>
                dispatch(
                  setFilterProp({ key: "cookingTime", value: e.target.value })
                )
              }
            >
              <option value="">Any</option>
              <option value="0-30">Up to 30 min</option>
              <option value="30-60">30-60 min</option>
              <option value="60+">More than 60 min</option>
            </select>
          </div>

          <div
            className={cn(
              styles["filter__group"],
              theme === "dark" && styles["filter__group--dark"]
            )}
          >
            <label
              htmlFor="cuisine"
              className={cn(
                styles["filter__label"],
                theme === "dark" && styles["filter__label--dark"]
              )}
            >
              Cuisine:
            </label>
            <select
              id="cuisine"
              className={cn(
                styles["filter__select"],
                theme === "dark" && styles["filter__select--dark"]
              )}
              value={currentFilters.cuisine || ""}
              onChange={(e) =>
                dispatch(
                  setFilterProp({ key: "cuisine", value: e.target.value })
                )
              }
            >
              <option value="">Any</option>
              <option value="Italian">Italian</option>
              <option value="French">French</option>
              <option value="American">American</option>
              <option value="Mexican">Mexican</option>
              <option value="Indian">Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Japanese">Japanese</option>
            </select>
          </div>

          <div
            className={cn(
              styles["filter__group"],
              theme === "dark" && styles["filter__group--dark"]
            )}
          >
            <label
              className={cn(
                styles["filter__label"],
                theme === "dark" && styles["filter__label--dark"]
              )}
            >
              Calories per serving:
            </label>
            <div className={cn(styles["filter__checkbox-row"])}>
              <input
                type="number"
                placeholder="min"
                value={currentFilters.calories?.min || ""}
                onChange={(e) =>
                  dispatch(
                    setFilterProp({
                      key: "calories",
                      value: {
                        ...currentFilters.calories,
                        min: e.target.value,
                      },
                    })
                  )
                }
                className={cn(
                  styles["filter__select"],
                  theme === "dark" && styles["filter__select--dark"]
                )}
              />
              <input
                type="number"
                placeholder="max"
                value={currentFilters.calories?.max || ""}
                onChange={(e) =>
                  dispatch(
                    setFilterProp({
                      key: "calories",
                      value: {
                        ...currentFilters.calories,
                        max: e.target.value,
                      },
                    })
                  )
                }
                className={cn(
                  styles["filter__select"],
                  theme === "dark" && styles["filter__select--dark"]
                )}
              />
            </div>
          </div>

          <div
            className={cn(
              styles["filter__group"],
              theme === "dark" && styles["filter__group--dark"]
            )}
          >
            <label
              className={cn(
                styles["filter__label"],
                theme === "dark" && styles["filter__label--dark"]
              )}
            >
              Tags:
            </label>
            <div className={cn(styles["filter__checkbox-row"])}>
              {[
                "Pizza",
                "Italian",
                "Vegetarian",
                "Vegan",
                "Spicy",
                "Gluten-Free",
                "Quick",
                "Healthy",
              ].map((tag) => (
                <label
                  key={tag}
                  className={cn(
                    styles["filter__checkbox-label"],
                    theme === "dark" && styles["filter__checkbox-label--dark"]
                  )}
                >
                  <input
                    type="checkbox"
                    checked={currentFilters.tags?.includes(tag) || false}
                    onChange={(e) => {
                      const tags = currentFilters.tags || [];
                      if (e.target.checked) {
                        dispatch(
                          setFilterProp({ key: "tags", value: [...tags, tag] })
                        );
                      } else {
                        dispatch(
                          setFilterProp({
                            key: "tags",
                            value: tags.filter((t) => t !== tag),
                          })
                        );
                      }
                    }}
                  />
                  {tag}
                </label>
              ))}
            </div>
          </div>

          <div
            className={cn(
              styles["filter__group"],
              theme === "dark" && styles["filter__group--dark"]
            )}
          >
            <label
              className={cn(
                styles["filter__label"],
                theme === "dark" && styles["filter__label--dark"]
              )}
            >
              Meal type:
            </label>
            <div className={cn(styles["filter__checkbox-row"])}>
              {["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"].map(
                (type) => (
                  <label
                    key={type}
                    className={cn(
                      styles["filter__checkbox-label"],
                      theme === "dark" && styles["filter__checkbox-label--dark"]
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={currentFilters.mealType?.includes(type) || false}
                      onChange={(e) => {
                        const mealType = currentFilters.mealType || [];
                        if (e.target.checked) {
                          dispatch(
                            setFilterProp({
                              key: "mealType",
                              value: [...mealType, type],
                            })
                          );
                        } else {
                          dispatch(
                            setFilterProp({
                              key: "mealType",
                              value: mealType.filter((t) => t !== type),
                            })
                          );
                        }
                      }}
                    />
                    {type}
                  </label>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
