import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login(props) {
    const [user, setUser] = useState({ 
        email: "", password: ""
    });
  
    const handleChange = event => {
      setUser({ 
        ...user, [event.target.name]: event.target.value
        });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
    }
  
    return (
      <div className="Login">
        <h1>Login</h1>

        <form onSubmit={event => handleSubmit(event)}>
          <label>
            Email:
            <input 
              type="text" 
              name="email"
              value={user.email}
              onChange={event => handleChange(event)}
            />
          </label>
  
          <label>
            Password:
            <input 
              type="text" 
              name="password"
              value={user.password}
              onChange={event => handleChange(event)}
            />
          </label>
  
          <button>Submit</button>
        </form>

        Don't have an account?
        <Link to="/Login">Register here</Link>

      </div>
    );
  }

export default Login;