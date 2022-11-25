import * as React from "react"
import { NavLink } from "react-router-dom"

// importing material UI components
import AppBar from "@mui/material/AppBar"

import Toolbar from "@mui/material/Toolbar"

import akvelon from "./akvecrop.jpg"

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "warning.main" }}
      style={{ marginBottom: "50px" }}
    >
      <Toolbar style={{ height: "100px" }}>
        <NavLink to={""} style={{ textDecoration: "none" }}></NavLink>
        <img
          src={akvelon}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
          alt="akvelon"
        />
      </Toolbar>
    </AppBar>
  )
}
