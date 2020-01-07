import React, { useState } from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

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
    e.preventDefault();
    // setData({ ...data, isFetching: true });
    delete data.isFetching;
    axios
      .post("https://chefposts.herokuapp.com/api/chefs/register", data)
      .then(res => {
        // setData("response", res.data);
        props.history.push("/");
      })
      .catch(err =>
        console.log(
          "sorry, an error has occured while registering your information",
          err
        )
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
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={data.location}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact_info"
            placeholder="Email"
            value={data.contact_info}
            onChange={handleChange}
          />
          {/* make a three inputs in this form for name, location, and contact_info */}
          <button type="submit">Register</button>
          {data.isFetching && "...Registering Profile"}{" "}
          {/* optional loading state */}
        </form>
      </div>
    </>
  );
};

export default Register;
