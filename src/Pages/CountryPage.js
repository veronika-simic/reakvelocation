import React from "react";
import { NavLink } from "react-router-dom";

function CountryPage({country}) {
    return (
        <div>
          <NavLink to={"/"}>
            <button>Return To Homepage</button>
          </NavLink>
         {country.name}
        </div>
      )
}

export default CountryPage;