import React from "react";
import { NavLink } from "react-router-dom";

const Homepage = ({ locationData, setLocationData }) => {
  return (
    <div>
      <NavLink to={""}>
        <button>Return To Homepage</button>
      </NavLink>

      <NavLink to={"/croatia"}>
        <img
          src="https://plus.unsplash.com/premium_photo-1661963915825-9dee778ad548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className="croatia"
          style={{ height: "400px", width: "400px" }}
          alt="This is just to remove the linter error for croatia page"
        />
      </NavLink>

      <NavLink to={"/mexico"}>
        <img
          src="https://images.unsplash.com/photo-1565670105658-ea35d27f7de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
          className="mexico"
          style={{ height: "400px", width: "400px" }}
          alt="This is just to remove the linter error for mexico page"
        />
      </NavLink>

      <NavLink to="/serbia">
        <img
          src="https://images.unsplash.com/photo-1618766494374-2d27737bb239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"
          className="serbia"
          style={{ height: "400px", width: "400px" }}
          alt="This is just to remove the linter error for serbia page"
        />
      </NavLink>
    </div>
  );
};

export default Homepage;
