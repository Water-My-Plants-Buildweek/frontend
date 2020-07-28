import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { loginFormSchema } from "../validation/loginFormSchema";
import axios from "axios";
import { useHistory } from "react-router-dom";

export function login(postObj) {
  axios
    .post("https://water-my-pants.herokuapp.com/api/auth/login", postObj)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      console.log("Error happend with the post request", error);
    });
}

export default function LoginForm() {
  const history = useHistory();
  //created object with name and password and assigned to
  //variables below
  const initialFormState = {
    username: "",
    password: "",
  };
  const initialErrors = {
    username: "",
    password: "",
  };

  //passed in the variables inside of useState as an arguement
  const [formState, setFormState] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);

  // passed the formState into the formSchema to make sure
  // all form input values are valid before the user is able to click submit
  useEffect(() => {
    loginFormSchema.isValid(formState).then((valid) => {
      console.log("this is valid", valid);
      setLoginButtonDisabled(!valid);
    });
  }, [formState]);

  //this variable i inserted inside of onChange of name and password input

  const loginInputChange = (event) => {
    event.persist();
    setFormState({ ...formState, [event.target.name]: event.target.value });
    validate(event);
    console.log(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("this is formstate", formState);
    login(formState);
    history.push("/plants");
  };

  const validate = (event) => {
    yup
      .reach(loginFormSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [event.target.name]: "",
        });
      })
      .catch((error) => {
        console.log(error.errors);
        setErrors({
          ...errors,
          [event.target.name]: error.errors[0],
        });
      });
  };

  return (
    <form onSubmit={formSubmit} className="loginForm">
      <h1>Login</h1>
      <img
        src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-256.png"
        alt=""
        className="formPicIcon"
      />

      {errors.username.length > 0 ? (
        <p className="error">{errors.username}</p>
      ) : null}
      {errors.password.length > 0 ? (
        <p className="error">{errors.password}</p>
      ) : null}

      <label htmlFor="name">
        <i class="fa fa-user icon"></i>
        <input
          type="text"
          id="name"
          name="username"
          placeholder="Username"
          onChange={loginInputChange}
          value={formState.username}
        />
      </label>

      <label htmlFor="password">
        <i class="fa fa-key icon"></i>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={loginInputChange}
          value={formState.password}
        />
      </label>
      <button disabled={loginButtonDisabled}>LOGIN</button>
      <a href="#" className="formLink">
        Forgot Username/Password?
      </a>
    </form>
  );
}
