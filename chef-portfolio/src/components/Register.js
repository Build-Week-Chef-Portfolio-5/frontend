import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register(props) {
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = event => {
        setNewUser({ 
          ...newUser, [event.target.name]: event.target.value
          });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
      }
  
    return (
        <div className="Register">
          <h1>Register</h1>
          
          <form onSubmit={event => handleSubmit(event)}>
            <label>
              Email:
              <input 
                type="text" 
                name="email"
                value={newUser.email}
                onChange={event => handleChange(event)}
              />
            </label>
    
            <label>
              Password:
              <input 
                type="text" 
                name="password"
                value={newUser.password}
                onChange={event => handleChange(event)}
              />
            </label>

            <label>
              Confirm Password:
              <input 
                type="text" 
                name="password"
                value={newUser.confirmPassword}
                onChange={event => handleChange(event)}
              />
            </label>
    
            <button>Submit</button>
          </form>

          Already have an account?
          <Link to="/Login">Log in here</Link>
        </div>
      );
  }

export default Register;