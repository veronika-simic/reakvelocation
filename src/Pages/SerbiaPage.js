import React from "react";
import { NavLink } from "react-router-dom";

const SerbiaPage = ({ locationData, setLocationData }) => {
  return (
    <div>
      <NavLink to={"/"}>
        <button>Return To Homepage</button>
      </NavLink>
      Belgrade
    </div>
  );
};

export default SerbiaPage;
