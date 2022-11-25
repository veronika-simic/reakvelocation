import "./styles/reset.css";
import "./styles/colors.css";
import "./styles/typography.css";
import "./styles/utilities.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
