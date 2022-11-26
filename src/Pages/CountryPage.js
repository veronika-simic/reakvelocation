import React from "react";
import { NavLink } from "react-router-dom";
import "./CountryPage.css";

function CountryPage({ country }) {
  return (
    <div>
      {/* <NavLink to={"/"}>
            <button>Return To Homepage</button>
          </NavLink> */}

      <div className="country-main">
        <img src={country.picture} alt="picture of city" />
        <h2>{country.name}</h2>
      </div>
      <h3 className="description">{country.description}</h3>
    </div>
  );
}

export default CountryPage;
