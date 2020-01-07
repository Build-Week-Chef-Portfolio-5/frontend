import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import "./Login.css";

const initialState = {
  username: "",
  password: "",
  isFetching: false
};

const Login = props => {
  const [inputValues, setInputValues] = useState(initialState);

  const handleChange = e => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setInputValues({ ...inputValues, isFetching: true });
    axiosWithAuth()
      .post("/login")
      .then(res => {
        localStorage.getItem("token", res.data.payload);
        props.history.push("/chef-portfolio"); // this is the name of the page that it will "push" to after a user logs in with correct credentials
      })
      .catch(err =>
        console.log("sorry, an error has occured with logging you in", err)
      );
  };

  return (
    <>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={inputValues.username}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={inputValues.password}
            onChange={handleChange}
          />
          <button>Login</button>
          {inputValues.isFetching && "...Logging You In"}{" "}
          {/* optional loading state */}
        </form>
      </div>
    </>
  );
};

export default Login;
