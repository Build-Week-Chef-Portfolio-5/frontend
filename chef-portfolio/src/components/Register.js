import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  username: "",
  password: "",
  name: "",
  location: "",
  contact_info: "",
  isFetching: false
};

const Register = props => {
  const [data, setData] = useState(initialState);

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    console.log("is this thing working?")
    e.preventDefault();
    setData({ ...data, isFetching: true });
    axiosWithAuth()
      .post("/register")
      .then(res => {
        localStorage.getItem("token", res.data.payload);
        props.history.push("/chef-portfolio");
      })
      .catch(err =>
        console.log("sorry, an error has occured while registering your information", err)
      );
  };

  return (
    <>
      <h1>Register</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
          {/* make a three inputs in this form for name, location, and contact_info */}

          <button>Register</button>
          {data.isFetching && "...Registering Profile"}{" "}
          {/* optional loading state */}
        </form>
      </div>
    </>
  );
};

export default Register;
