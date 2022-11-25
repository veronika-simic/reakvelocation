import * as React from "react";
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

  return (
    <div className="cards">
      <>
        <Banner></Banner>

        {country.length > 0 &&
          country.map((city, index) => {
            return (
              <div className={`card card-${index + 1}`} key={index}>
                <NavLink to={`${city.name}`} style={{ textDecoration: "none" }}>
                  <h3>{city.name}</h3>
                  {checkWhichCity(city)}
                </NavLink>
              </div>
            );
          })}
      </>
    </div>
  );
}
