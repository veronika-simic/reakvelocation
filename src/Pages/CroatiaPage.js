import React from "react";
import { NavLink } from "react-router-dom";

const CroatiaPage = ({ locationData, setLocationData }) => {
  console.log(`ovo je location data u croatia Page ${locationData}`);
  return (
    <div>
      <NavLink to={"/"}>
        <button>Return To Homepage</button>
      </NavLink>
      Zagreb
    </div>
  );
};

export default CroatiaPage;
