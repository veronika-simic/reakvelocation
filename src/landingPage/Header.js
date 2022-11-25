import * as React from "react";
import { NavLink } from "react-router-dom";
import image from './akvecrop.jpg'

// importing material UI components
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <AppBar className="bg-orange" position="static">
      <Toolbar style={{ height: "100px", alignItems: "center" }} sx={{ justifyContent: 'center' }}>
        <NavLink to={""} style={{ textDecoration: "none", color: "white" }}>
          <Typography variant="h4" component="div" sx={{ justifyContent: 'center' }}>
          <img src={image} alt="bla"></img>
          </Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
