import React from "react";
import './navbar1.css';
import {Link} from "react-router-dom"

function Navbar1() {
  return (
<>
<nav className="main-nav">
<div className="Menu">
  <ul>
  <img src={require('./logo.jpeg')} className="img" alt="logo"/>
    <li><Link to="/Contact">Contact us</Link></li>
    <li><Link to="/Main">Login </Link></li>
    <li><Link to="/RegistrationForm" >Signup</Link></li>
    <li><Link to="/" >Home</Link></li> 
  </ul>
</div>



</nav>

</>
  );
}

export default Navbar1;