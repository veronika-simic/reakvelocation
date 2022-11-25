import * as React from "react";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
import { getAllCountries } from "../../api/api";
import Banner from "../Banner/Banner";
import "../Banner/Banner.css";
import { Key } from "@mui/icons-material";
/* import CroatiaPage from "../Pages/CroatiaPage";
import SerbiaPage from "../Pages/SerbiaPage";
import MexicoPage from "../Pages/MexicoPage";
 */

export default function Card({ locationData, setLocationData }) {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const getAllCountriesFromApi = async () => {
      const response = await getAllCountries();
      setCountry(response.data);
      setLocationData(response.data);
    };
    getAllCountriesFromApi();
  }, []);

  console.log(country);

  function checkWhichCity(city) {
    if (city.name === "Beograd") {
      return <p className="hidden">{city.name} is the capital of Serbia</p>;
    } else if (city.name === "Zagreb") {
      return <p className="hidden">{city.name} is the capital of Croatia</p>;
    } else {
      return (
        <p className="hidden">
          {city.name} is one of the biggest cities in Mexico
        </p>
      );
    }
  }
=======

import "./Card.css";
import { NavLink } from "react-router-dom";
>>>>>>> dc479e22d9514376db660981b536eaa52f5fe442

import Banner from "../Banner/Banner";
import "../Banner/Banner.css";

export default function Card({ countries }) {
  return (
    <>
      <Banner></Banner>
      <div className="cards">
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
    </>
  );
}
