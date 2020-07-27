import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { loginFormSchema } from "../validation/loginFormSchema";

export default function LoginForm() {
  //created object with name and password and assigned to
  //variables below
  const initialFormState = {
    name: "",
    password: "",
  };
    const initialErrors = {
      name: "",
      password: ""
    }

  //passed in the variables inside of useState as an arguement
  const [formState, setFormState] = useState(initialFormState);
    const [errors, setErrors]=useState(initialErrors)
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);

  // passed the formState into the formSchema to make sure
  // all form input values are valid before the user is able to click submit
  useEffect(() => {
    loginFormSchema.isValid(formState).then((valid) => {
      console.log('this is valid',valid)
      setLoginButtonDisabled(!valid);
    });
  }, [formState]);

  //this variable i inserted inside of onChange of name and password input

  const loginInputChange = (event) => {
    event.persist()
    setFormState({ ...formState, [event.target.name]: event.target.value });
    validate(event)
    console.log(event.target.value)
  };

  const formSubmit = (event) => {
    event.preventDefault();
  };


  const validate = (event) =>{
    yup.reach(loginFormSchema, event.target.name).validate(event.target.value)
    .then(valid =>{
        setErrors({
            ...errors,
            [event.target.name]: ""
        })
    })
    .catch(error =>{
        console.log(error.errors)
        setErrors({
            ...errors,
            [event.target.name] : error.errors[0]
        })
    })
}








  return (
    <form onSubmit={formSubmit}>

      <h1>Login</h1>
      {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}

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
     
      
      <label htmlFor="password">
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
    </form>
  );
}
