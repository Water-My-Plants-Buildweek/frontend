import React from 'react';
import { Link } from 'react-router-dom'

export default function Header(){

return(
<header>
 <h1>Wet My Plants</h1> 


<nav>
<Link to="/signup">Sign Up</Link>
<Link to="/login">Login</Link>
<Link to="">Plants</Link>
<Link to="">Account</Link>
<Link to="">Log Out</Link>

</nav>


</header>
)

}

