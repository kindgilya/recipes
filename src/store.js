import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./feachers/recipesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
