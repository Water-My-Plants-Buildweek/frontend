import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { SignUpFormSchema } from "../validation/SignUpFormSchema";

export default function SignInForm() {
  //created object with name and password and assigned to
  //variables below
  const initialFormState = {
    name: "",
    password: "",
    passwordConfirmation: "",
  };
  const initialErrors = {
    name: "",
    password: "",
    passwordConfirmation: "",
  };
<<<<<<< HEAD
=======
  const initialErrors = {
    name: "",
    password: "",
    passwordConfirmation: ""
  };
>>>>>>> 1e81465ddad1bb83ab27a398f8d89938f76c0ce1

  //passed in the variables inside of useState as an arguement
  const [formState, setFormState] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);

  // passed the formState into the formSchema to make sure
  // all form input values are valid before the user is able to click submit
  useEffect(() => {
    SignUpFormSchema.isValid(formState).then((valid) => {
<<<<<<< HEAD
=======
      console.log('this is valid', valid);
>>>>>>> 1e81465ddad1bb83ab27a398f8d89938f76c0ce1
      setLoginButtonDisabled(!valid);
      if (valid) {
        setErrors(initialErrors);
      }
    });
  }, [formState]);

  //this variable i inserted inside of onChange of name and password input

  const loginInputChange = (event) => {
    event.persist();
    setFormState({ ...formState, [event.target.name]: event.target.value });
    validate(event);
<<<<<<< HEAD
    // console.log(event.target.value);
=======
    console.log(event.target.value);
>>>>>>> 1e81465ddad1bb83ab27a398f8d89938f76c0ce1
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("submited form");
  };

<<<<<<< HEAD
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
=======

  const validate = (event) => {
    yup.reach(SignUpFormSchema, event.target.name).validate(event.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [event.target.name]: ""
        });
      })
      .catch(error => {
        console.log(error.errors);
        setErrors({
          ...errors,
          [event.target.name]: error.errors[0]
>>>>>>> 1e81465ddad1bb83ab27a398f8d89938f76c0ce1
        });
      });
  };

  return (
    <form onSubmit={formSubmit} className="signUpForm">
      <h1>Sign Up</h1>
      <img
        src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-256.png"
        className="formPicIcon"
      />
      {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      {errors.password.length > 0 ? (
        <p className="error">{errors.password}</p>
      ) : null}
      {errors.passwordConfirmation.length > 0 ? (
        <p className="error">{errors.passwordConfirmation}</p>
      ) : null}

      <label htmlFor="name">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Username"
          onChange={loginInputChange}
          value={formState.name}
        />
      </label>

<<<<<<< HEAD
=======

>>>>>>> 1e81465ddad1bb83ab27a398f8d89938f76c0ce1
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={loginInputChange}
          value={formState.password}
        />
<<<<<<< HEAD
=======

>>>>>>> 1e81465ddad1bb83ab27a398f8d89938f76c0ce1
      </label>
      <label htmlFor="passwordConfirmation">
        <input
          type="password"
          id="passwordConfirmation"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          onChange={loginInputChange}
          value={formState.passwordConfirmation}
        />
<<<<<<< HEAD
=======

>>>>>>> 1e81465ddad1bb83ab27a398f8d89938f76c0ce1
      </label>
      <button disabled={loginButtonDisabled}>LOGIN</button>
    </form>
  );
}
