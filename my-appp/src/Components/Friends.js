import React, { Component, useEffect,useState } from 'react'
import Navbar from './Navbar'
import "./Friends.css"
import {Link} from "react-router-dom"
import Footer from './Footer'

function Friends() {
 
    return (
        <div>
        <Navbar />
        <h1 className="head">Friends</h1>
        <div>
           <Link to="/Searchbar"><button className="btton">Add a friend</button></Link> &nbsp;  
          <Link to= "/FriendReq"> <button >Friend Requests</button> </Link>                                                                       
          </div>
        <table>
            <tr>
                <td><Link to="/Individual"><img style={{width:"300px", marginBottom:"300px",marginLeft:"2%"}}src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'/></Link></td>
                
            </tr>
        </table>
        <Footer />
        </div>
    )
  }

export default Friends
