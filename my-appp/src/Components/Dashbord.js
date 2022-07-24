import React, { Component } from 'react'
import "./table.css"
// import AddFriend from './AddFriend'
import Searchbar from './Searchbar';
import {Link } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from './Footer';
import './Dashboard.css'
import "./Friends.css"

// import "./Dashboard.css"

class Dashbord extends Component{
  componentDidMount() {
    const config = {
      headers: {
        Authorization: localStorage.getItem('accessToken')
      }
    }
  }
  
  render(){

  return (
    <div >
      <Navbar />
      <h1 className="head">Dashboard</h1>
      <br></br>
      <h1>Welcome to PayUback</h1>
      <br></br>
      <h1>No More awkwardness taking loan from a friend </h1>
      <br></br>
      <br></br>
      <h2>Send a friend request to your friend and request for a loan via PayUback</h2>
      <br></br>
      <img src="https://www.paypalobjects.com/marketing/web/gb/en/invite/terms/LP_Evergreen_Hero_Animation.gif" width={600}/>
      <br></br>
      <br></br>
      <h2>Get Payment Reminders via Email</h2>
      <br></br>
      <img src='https://i.pinimg.com/originals/7e/69/ec/7e69eca344ca1465da94d698ded08e8e.gif' width={600}/>
      <center>
      <h1>Download PayUback on</h1>
<br></br>

<div className="pic2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" width={200}/>
    {/* &nbsp;&nbsp;<img src={require('./app store.PNG')} width={200}/> */}
 </div>
      </center>
      <div className='picbot'>
        <center>
      <Footer />
      </center>
      </div>
    </div>
  );
  }
}

export default Dashbord
