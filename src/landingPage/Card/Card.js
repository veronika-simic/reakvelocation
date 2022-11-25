import * as React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
/* import CroatiaPage from "../Pages/CroatiaPage";
import SerbiaPage from "../Pages/SerbiaPage";
import MexicoPage from "../Pages/MexicoPage";
 */

export default function Card() {
  return (
    <div class="cards">
      <div class="card card-1">
        <NavLink to={"/serbia"} style={{ textDecoration: "none" }}>
          <h3>BELGRADE</h3>
          <p class="hidden">Belgrade is the capital of Serbia.</p>
        </NavLink>
      </div>

      <div class="card card-2">
        <NavLink to={"/mexico"} style={{ textDecoration: "none" }}>
          <h3>GUADALAJARA</h3>
          <p class="hidden">Guadalajara is a city in western Mexico.</p>
        </NavLink>
      </div>

      <div class="card card-3">
        <NavLink to={"/croatia"} style={{ textDecoration: "none" }}>
          <h3>ZAGREB</h3>
          <p class="hidden">Zagreb is the capital of Croatia.</p>
        </NavLink>
      </div>
    </div>
  );
}
