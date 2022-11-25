import * as React from "react";

import "./Card.css";
import { NavLink } from "react-router-dom";

import Banner from "../Banner/Banner";
import "../Banner/Banner.css";

export default function Card({ countries }) {
  return (
    <div className="cards">
      <Banner></Banner>
      {countries.length > 0 &&
        countries.map((c, index) => (
          <div key={index} className={`card card-${index + 1}`}>
            <NavLink to={`/${c.name}`} style={{ textDecoration: "none" }}>
              <h3>{c.name}</h3>
              <p className="hidden">Belgrade is the capital of Serbia.</p>
            </NavLink>
          </div>
        ))}
    </div>
  );
}
