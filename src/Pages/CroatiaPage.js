import React from "react"
import { NavLink } from "react-router-dom"

const CroatiaPage = (props) => {
  return (
    <div>
      <NavLink to={"/"}>
        <button>Return To Homepage</button>
      </NavLink>
      Zagreb
    </div>
  )
}

export default CroatiaPage
