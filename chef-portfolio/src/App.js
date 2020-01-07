import React from "react";
import { Route, Link } from "react-router-dom";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>

      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
    </div>
  );
}

export default App;