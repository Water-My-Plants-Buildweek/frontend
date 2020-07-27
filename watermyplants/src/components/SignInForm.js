import React, {useState} from 'react';
import * as yup from 'yup'
import {formSchema} from '../validation/formSchema'


export default function SignInForm(){

  const initialFormState = {
      name: "",
      password: ""
  }
  const intialErrors = {
    name: "",
    password: ""
  }

  const [formState, setFormState]=useState(initialFormState)
  const [errors, setErrors]=useState(initialErrors)


 return (
     <form>
         <h1>Login</h1>
         <label htmlFor="name">
         <input type="text" id="name" name="name" placeholder="Username" />
         </label>
         <label htmlFor="password">
         <input type="password" id="password" name="name" placeholder="Password" />
         </label>
         <button>LOGIN</button>
        
     </form>
 )

}