import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { SignUpFormSchema } from "../validation/SignUpFormSchema";
import axios from "axios";
import { login } from "../utils/login";
import { useHistory } from "react-router-dom";

export default function SignInForm() {
  //created object with name and password and assigned to
  //variables below
  const initialFormState = {
    username: "",
    password: "",
    passwordConfirmation: "",
  };
  const initialErrors = {
    username: "",
    password: "",
    passwordConfirmation: "",
  };
  const history = useHistory();

  //passed in the variables inside of useState as an arguement
  const [formState, setFormState] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);
  const [loginExists, setLoginExists] = useState(false);
  // passed the formState into the formSchema to make sure
  // all form input values are valid before the user is able to click submit
  useEffect(() => {
    SignUpFormSchema.isValid(formState).then((valid) => {
      setLoginButtonDisabled(!valid);

      if (valid) {
        setErrors(initialErrors);
      }
    });
  }, [formState]);

  const loginInputChange = (event) => {
    event.persist();
    setFormState({ ...formState, [event.target.name]: event.target.value });
    validate(event);
    // console.log(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://water-my-pants.herokuapp.com/api/auth/register",
        formattedFormValues()
      )
      .then((response) => {
        login(formattedFormValues(), history);
      })
      .catch((error) => {
        setLoginExists(true);
        // console.log('user already exist');
        //  setErrors({...errors, alreadyExists: 'User already exists'})
      });
  };

  function formattedFormValues() {
    return {
      username: formState.username,
      password: formState.password,
    };
  }

  const validate = (event) => {
    yup
      .reach(SignUpFormSchema, event.target.name)
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
    <div className="formContainer">
      <form onSubmit={formSubmit} className="signUpForm">
        <h1>Sign Up</h1>
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
        {errors.passwordConfirmation.length > 0 ? (
          <p className="error">{errors.passwordConfirmation}</p>
        ) : null}
        {loginExists === false ? null : (
          <p className="error">Username is already Taken. Try Again!</p>
        )}

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
        <label htmlFor="passwordConfirmation">
          <i class="fa fa-key icon"></i>
          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            onChange={loginInputChange}
            value={formState.passwordConfirmation}
          />
        </label>
        <button disabled={loginButtonDisabled}>SIGN UP</button>
      </form>
    </div>
  );
}
