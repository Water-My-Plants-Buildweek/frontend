import React, {useState, useEffect} from 'react';
import * as yup from 'yup'
import {formSchema} from '../validation/formSchema'


export default function SignInForm(){

//created object with name and password and assigned to
//variables below
  const initialFormState = {
      name: "",
      password: ""
  }
  const intialErrors = {
    name: "",
    password: ""
  }
  
  //passed in the variables inside of useState as an arguement
  const [formState, setFormState]=useState(initialFormState)
  const [errors, setErrors]=useState(initialErrors)
  const [loginButtonDisabled, setLoginButtonDisabled]=useState(true)


  // passed the formState into the formSchema to make sure
  // all form input values are valid before the user is able to click submit
  useEffect(()=>{
    formSchema.isValid(formState).then(valid => {
      setLoginButtonDisabled(!valid)
    })
  }, [formState])






  
 return (
     <form>
         <h1>Login</h1>
         <label htmlFor="name">
         <input type="text" id="name" name="name" placeholder="Username" />
         </label>
         <label htmlFor="password">
         <input type="password" id="password" name="name" placeholder="Password" />
         </label>
         <button disabled={loginButtonDisabled}>LOGIN</button>
        
     </form>
 )

}