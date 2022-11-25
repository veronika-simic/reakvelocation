import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <NavLink to={"/"}>
        <button>Return To Homepage</button>
      </NavLink>
      <div>Not Found</div>

      <div>404</div>
    </div>
  );
};

export default NotFoundPage;
