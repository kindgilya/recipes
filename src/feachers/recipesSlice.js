import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { getRecipes } from "../api/api";

// type TRecipe = {
// 	id: number,
// 	title: string
// }

// type TInitialState = {
//   list: TRecipe[],
//   status: string,
//   error: string,
//   total: number,
//   favoriteIds: number[],
//   disabledIds: number[],
// };

// const initialState: TInitialState = {
//   list: [],
//   status: "idle",
//   error: "",
//   total: 0,
//   favoriteIds: [],
//   disabledIds: [],
// };

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (skip, { rejectWithValue }) => {
    try {
      const recipes = await getRecipes(skip);
      return recipes;
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
    favoriteIds: [],
    disabledIds: [],
  },
  // sync
  reducers: {
    // addFavoriteById(state, action) {
    //   state.favoriteIds.push(action.payload);
    // },
    // removeFavoriteById(state, action) {
    //   state.favoriteIds = state.favoriteIds.filter(
    //     (id) => id !== action.payload
    //   );
    // },
    toggleFavoriteById(state, action) {
      if (state.favoriteIds.includes(action.payload)) {
        state.favoriteIds = state.favoriteIds.filter(
          (id) => id !== action.payload
        );
      } else {
        state.favoriteIds.push(action.payload);
      }
    },
    toggleDisabledById(state, action) {
      if (state.disabledIds.includes(action.payload)) {
        state.disabledIds = state.disabledIds.filter(
          (id) => id !== action.payload
        );
      } else {
        state.disabledIds.push(action.payload);
      }
    },
  },
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
export const selectIsRecipeFavorite = createSelector(
  [(state) => state, (state, id) => id],
  (state, id) => state.recipes.favoriteIds.includes(id)
);
export const selectIsRecipeDisabled = createSelector(
  [(state) => state, (state, id) => id],
  (state, id) => state.recipes.disabledIds.includes(id)
);

// export default recipesSlice.reducer
export const { reducer: recipesReducer } = recipesSlice;
export const { toggleFavoriteById, toggleDisabledById } = recipesSlice.actions;
