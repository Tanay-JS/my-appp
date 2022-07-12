import React, { Component } from 'react'
import "./table.css"
// import AddFriend from './AddFriend'
import Searchbar from './Searchbar';
import {Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from './Footer';
import "./Friends.css"
import { useEffect } from "react"


// import "./Dashboard.css"

function Dashbord() {
  // console.log(localStorage.getItem('accessToken'))
  const navigate = useNavigate()
  useEffect(() => {
    if ((localStorage.getItem('token'))=="undefined"){
      navigate('/Main')
    }
    else if (!(localStorage.getItem('token'))){
      navigate('/Main')
    }
  }, [])
  
  // componentDidMount() {
  //   const config = {
  //     headers: {
  //       Authorization: localStorage.getItem('accessToken')
  //     }
  //   }
  // }
  

    // const mystyle={
    //   marginTop: "20%",
    //   backgroundColor: "#ff5b00",
    //   border: "none",
    //   color: "white",
    //   padding: "15px 32px",
    //   textAlign: "center",
    //   textDecoration: "none",
    //   display: "inline-block",
    //   fontSize: "16px",
    //   margin: "20% 2px",
    //   cursor: "pointer",
    //   textAlign: "center",
    //   borderRadius: "10px",
    // }
  return (
    <div >
      <Navbar />
      <h1 className="head">Dashboard</h1>

      {/* <center>
      <table>
        <tr>                                                                                                                                                                                                                                                                                                                                                                                                                                          
          <th>Friend</th>
          <th>Mobile No.</th>                                                                                                                                                                                                                                                                                                     
          <th>Email</th>
        </tr>
        <tr>
          <td><Link to="/Searchbar"><button id="button">Add a friend</button></Link></td>                                                                                     
        </tr>

      </table>
      
      </center> */}
      {/* <hr></hr> */}
      <center>
       <table style={{marginBottom:"250px"}}>  
        <tr>  
         <td>  
         
         </td>
         <td>
           <h6 style={{color:"#FF5B00",fontSize:"30px",textAlign:"center"}}>We have an app now!!!</h6> <br></br>
           <Link to="/Dashbord"><img src={require('./imgs/gps.jpg')} className="img"/></Link>
           <Link to="/Dashbord"><img src={require('./imgs/ios.jpg')} className="img"/></Link>
         </td>
        </tr>
       </table>
      </center>
      <Footer />
    </div>
  );
  }


export default Dashbord
