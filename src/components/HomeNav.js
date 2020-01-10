import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function HomeNav() {
  return (
    <header className="NavBar">
      <button>
        <a href="https://thisguycodez.github.io/buildweekTEST/index.html">
          Home
        </a>
      </button>
      <button>
        <Link to="/all-recipes">Recipes</Link>
      </button>
    </header>
  );
}

export default HomeNav;
