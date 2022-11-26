import * as React from "react";

import "./Card.css";
import { NavLink } from "react-router-dom";

import Banner from "../Banner/Banner";
import "../Banner/Banner.css";

export default function Card({ countries }) {
  const checkWhichCountry = (c) => {
    if (c.name === "Beograd") {
      return <p className="hidden">{c.name} is the capital of Serbia.</p>;
    } else if (c.name === "Zagreb") {
      return <p className="hidden">{c.name} is the capital of Croatia.</p>;
    } else {
      return (
        <p className="hidden">
          {c.name} is the one ofthe largest cities in Mexico.
        </p>
      );
    }
  };

  return (
    <>
      <Banner></Banner>
      <div className="cards">
        {countries.length > 0 &&
          countries.map((c, index) => (
            <div key={index} className={`card card-${index + 1}`}>
              <NavLink to={`/${c.name}`} style={{ textDecoration: "none" }}>
                <h3>{c.name}</h3>
                {checkWhichCountry(c)}
              </NavLink>
            </div>
          ))}
      </div>
    </>
  );
}
