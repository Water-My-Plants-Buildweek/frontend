import React, {useState} from 'react';


export default function SignInForm(){

  const initialFormState = {
      name: "",
      password: ""
  }

  const [formState, setFormState]=useState(initialFormState)


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