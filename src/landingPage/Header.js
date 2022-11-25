import * as React from "react";
import { NavLink } from "react-router-dom";

// importing material UI components
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: "warning.main" }}>
      <Toolbar style={{ height: "100px" }}>
        <NavLink to={""} style={{ textDecoration: "none" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            REAKVELOCATION
          </Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
