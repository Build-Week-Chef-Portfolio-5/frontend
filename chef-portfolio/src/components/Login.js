import React, { useState, useEffect } from "react";
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
      </div>
    );
  }

export default Login;