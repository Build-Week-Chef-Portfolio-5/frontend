import React, { useState, useEffect } from "react";
import { useFormFields } from "../libs/hooksLib";
import "./Register.css";

function Register(props) {

    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
        confirmPassword: "",
        confirmationCode: "",
    });
  
    return (
      <div className="Register">

      </div>
    );
  }

export default Register;