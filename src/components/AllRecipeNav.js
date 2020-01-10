import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function AllRecipeNav() {
  return (
    <header className="NavBar">
      <button>
        <Link to="/">Login</Link>
      </button>
    </header>
  );
}

export default AllRecipeNav;
