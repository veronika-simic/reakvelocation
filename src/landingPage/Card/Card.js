import * as React from "react";
import { useState, useEffect } from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
import { getAllCountries } from "../../api/api";
/* import CroatiaPage from "../Pages/CroatiaPage";
import SerbiaPage from "../Pages/SerbiaPage";
import MexicoPage from "../Pages/MexicoPage";
 */

export default function Card() {
  const [country, setCountry] = useState([]) 
  useEffect( () => {
    const getAllCountriesFromApi = async () => {
      const response = await getAllCountries();
      setCountry(response.data)
    };
    getAllCountriesFromApi();
  }, [])

  return (
    <div className="cards">
      {country.length > 0 && country.map((c, index) => <div className={`card card-${index+1}`}>
        <NavLink key={index} to={"/serbia"} style={{ textDecoration: "none" }}>
          <h3>{c.name}</h3>
          <p className="hidden">Belgrade is the capital of Serbia.</p>
        </NavLink>
      </div>) }
    </div>
  );
}
