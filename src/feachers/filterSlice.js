import { createSlice } from "@reduxjs/toolkit";

// type TCalories = {
//     min: string,
//     max: string
// }

// type TInitialState = {
//   difficulty: string,
//   cookingTime: string,
//   cuisine: string,
//   calories: TCalories,
//   tags: string[],
//   mealType: string[],
// };

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    difficulty: "",
    cookingTime: "",
    cuisine: "",
    calories: { min: "", max: "" },
    tags: [],
    mealType: [],
  },
  reducers: {
    setFilterProp(state, action) {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { reducer: filterReducer } = filterSlice;
export const selectFilter = (state) => state.filter;
export const { setFilterProp } = filterSlice.actions;
