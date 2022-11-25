import React from "react";
import { NavLink } from "react-router-dom";
import "./MexicoPage.css";

const MexicoPage = () => {
  return (
    <div className="mexico">
      <div className="mexicoHeader">
        <NavLink to={"/"}>
          <button> Return to homepage</button>
        </NavLink>

        <div>Guadalajara</div>
      </div>

      <div className="categories"></div>

      <div className="footer"></div>
    </div>
  );
};

export default MexicoPage;
