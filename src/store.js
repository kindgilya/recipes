import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./feachers/recipesSlice";
import { filterReducer } from "./feachers/filterSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    filter: filterReducer,
  },
});
