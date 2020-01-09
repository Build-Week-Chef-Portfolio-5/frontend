import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//components
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import ChefPortfolio from "./components/ChefPortfolio";
import NavBar from "./components/NavBar";

function App() {
  // const [user, setUser] = useState({ email: "", password: ""});

  // const handleChange = event => {
  //   setUser({ ...user, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(user.email);
  //   console.log(user.password);
  // }

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/chef-portfolio" component={ChefPortfolio} />
      </div>
    </Router>
    // <div className="App">
    //   <form onSubmit={event => handleSubmit(event)}>
    //     <label>
    //       Email:
    //       <input
    //         type="text"
    //         name="email"
    //         value={user.email}
    //         onChange={event => handleChange(event)}
    //       />
    //     </label>

    //     <label>
    //       Password:
    //       <input
    //         type="text"
    //         name="password"
    //         value={user.password}
    //         onChange={event => handleChange(event)}
    //       />
    //     </label>

    //     <button>Submit</button>
    //   </form>
    // </div>
  );
}

export default App;
