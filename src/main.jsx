// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
