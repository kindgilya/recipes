import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// type TRecipe = {
// 	id: number,
// 	title: string
// }

// type TInitialState = {
// 	list: TRecipe[],
//   status: string,
//   error: string,
// }

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (skip, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/recipes?limit=10&skip=${skip}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    list: [],
    status: "idle",
    error: "",
    total: 0,
  },
  // sync
  reducers: {},
  // async
  extraReducers(builder) {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "idle";
        state.list = [...state.list, ...action.payload.recipes];
        state.total = action.payload.total;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

export const selectRecipes = (state) => state.recipes.list;
export const selectTotalRecipes = (state) => state.recipes.total;
export const selectRecipesStatus = (state) => state.recipes.status;
export const selectRecipesError = (state) => state.recipes.error;

// export default recipesSlice.reducer
export const { reducer: recipesReducer } = recipesSlice;
