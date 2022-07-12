import React, { Component } from 'react'
import './navbar.css'
// import User from './User'
// import User1 from './User1'
import { Link } from 'react-router-dom'

class Navbar extends Component {


  clickHandler() {
    localStorage.clear()
  }
  render() {
    return (
        <>
<nav className="main-nav">
<div className="Menu">

  <ul>
  <Link to="/Dashbord"><img src={require('./logo.jpeg')} className="img"/></Link>
    <li><Link to="/Main" onClick={this.clickHandler}>Logout</Link></li>
    <li><Link to="/Contact">Contact us</Link></li>
    <li><Link to="/Myprofile">My profile</Link></li>
    <li><Link to="/Friends">Friends</Link></li>
    <li><Link to="/Dashbord">Dashboard</Link></li>
    {/* <li><a href="" ><User1 /></a></li> */}
  </ul>
</div>
</nav>
</>
    )
  }
}

export default Navbar