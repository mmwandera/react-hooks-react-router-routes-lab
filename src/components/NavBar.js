import React from "react";
import { NavLink } from "react-router-dom";

// This component needs to render four NavLink components. They will be for /, /movies, /directors, /actors, in this order (test checks for this).

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/directors">Directors</NavLink>
    </div>
  );
}

export default NavBar;
