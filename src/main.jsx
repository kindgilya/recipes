// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoriteRecipesPage from "./pages/FavoriteRecipesPage.jsx";
import Theme from "./context/ThemeContext.jsx";
import RecepiesList from "./components/RecipiesList/RecepiesList.jsx";

const router = createBrowserRouter([
  // header + footer + aside 10
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <RecepiesList />,
      },
      {
        path: "/favorites",
        element: <FavoriteRecipesPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Theme>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </Theme>
);
