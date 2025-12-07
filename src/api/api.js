// import axios from "axios";
// import { BASE_URL } from "../config";

// export const getRecipes = async (skip, limit = 10) => {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}/recipes?limit=${limit}&skip=${skip}`
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "рецепты не загрузились");
//   }
// };

import mockServer from "./fakeServer.js";

export const getRecipes = async (page, limit = 10) => {
  try {
    return await mockServer.getRecipes({ page, limit });
  } catch (error) {
    throw new Error(error.response?.data?.message || "рецепты не загрузились");
  }
};
