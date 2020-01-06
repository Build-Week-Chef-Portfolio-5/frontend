import React, { useState } from "react";
import "./App.css";

function App() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [user, setUser] = useState({ email: "", password: ""});

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.email);
    console.log(user.password);
  }

  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Email:
          <input 
            type="text" 
            name="email"
            onChange={event => handleChange(event)}
          />
        </label>

        <label>
          Password:
          <input 
            type="text" 
            name="password"
            onChange={event => handleChange(event)}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;