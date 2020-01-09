import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
      <header className="NavBar">
        <button><Link to="/">Log Out</Link></button>
      </header>
    );
}

export default NavBar;
  