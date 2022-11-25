<<<<<<< HEAD:src/index.js
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
=======
import "./styles/reset.css";
import "./styles/colors.css";
import "./styles/typography.css";
import "./styles/utilities.css";

import App from "./src/App";
import { BrowserRouter } from "react-router-dom";
>>>>>>> main:index.js

import React from "react"
import ReactDOM from "react-dom/client"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
