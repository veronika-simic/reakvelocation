import React from "react";
import { NavLink } from "react-router-dom";

function CountryPage({ country, category }) {
  function checkWhichCountry(cat, country) {
    console.log(cat.name);
    console.log(country.name);

    console.log(country.name.includes(cat.name));
    if (country.name.includes(cat.name)) {
      return (
        <div>
          <div className="countryName">{country.name}</div>
          <div className="countryDescription">{country.description}</div>

          <div className="imageRow">
            <div className="image">
              <img
                src={`${cat.picture}`}
                alt="This is an alt to remove linter"
              />
            </div>
            <div className="imageDescription">{cat.description}</div>
          </div>
        </div>
      );
    }
  }

  console.log(country);
  return (
    <>
      {category
        .filter((cat) => country.name.includes(cat.name))
        .map((c) => {
          return (
            <div>
              <div className="countryName">{country.name}</div>
              <div className="countryDescription">{country.description}</div>

              <div className="imageRow">
                <div className="image">
                  <img
                    src={`${c.picture}`}
                    alt="This is an alt to remove linter"
                  />
                </div>
                <div className="imageDescription">{c.description}</div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default CountryPage;
