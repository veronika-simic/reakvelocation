import * as React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
import { getAllCountries } from "../../api/api";
/* import CroatiaPage from "../Pages/CroatiaPage";
import SerbiaPage from "../Pages/SerbiaPage";
import MexicoPage from "../Pages/MexicoPage";
 */

export default function Card() {
  return (
    <div className="cards">
     
      <div className="card card-1">
        <NavLink to={"/serbia"} style={{ textDecoration: "none" }}>
          <h3>BELGRADE</h3>
          <p className="hidden">Belgrade is the capital of Serbia.</p>
        </NavLink>
      </div>

      <div className="card card-2">
        <NavLink to={"/mexico"} style={{ textDecoration: "none" }}>
          <h3>GUADALAJARA</h3>
          <p className="hidden">Guadalajara is a city in western Mexico.</p>
        </NavLink>
      </div>

      <div className="card card-3">
        <NavLink to={"/croatia"} style={{ textDecoration: "none" }}>
          <h3>ZAGREB</h3>
          <p className="hidden">Zagreb is the capital of Croatia.</p>
        </NavLink>
      </div>
    </div>
  );
}
