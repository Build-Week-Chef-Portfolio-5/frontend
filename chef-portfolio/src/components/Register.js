import React, { useState, useEffect } from "react";
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
        </div>
      );
  }

export default Register;