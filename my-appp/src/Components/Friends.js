import React, { Component} from 'react'
import Navbar from './Navbar'
import "./Friends.css"
import {Link} from "react-router-dom"
import Footer from './Footer'

class Friends extends Component {

    
  constructor(props11) {
    super(props11)
  
    this.state = {   
      "connectionRequests": [],
      "connections": [],
      "email": "",
      "pendingRequests": [],
      selectedFreq: ''
    }
    // this.handleUnsend = this.handleUnsend.bind(this)
  }

    componentDidMount(){
      // window.location.reload()
        fetch('http://localhost:9002/user/details/'+(JSON.parse(localStorage.getItem('email'))), {
          headers: { 
        
            "Authorization" : JSON.parse(localStorage.getItem('token')) 
          } 
        })
        .then(response=>response.json())
        .then(result=>{console.log(result);
            this.setState((result));
        })}


    render(){
    return (
        <div>
        <Navbar />
        <h1 className="head">Friends</h1>
        <div>
           <Link to="/Searchbar"><button className="btton">Add a friend</button></Link> &nbsp;  
          <Link to= "/FriendReq"> <button>Friend Requests</button> </Link>                                                                       
          </div>
        <table style={{marginBottom:"100px",marginLeft:"2%"}}>
            <tr>
            {this.state.connections.map((item2) =>(<td style={{marginBottom:"300px"}}><Link to="/Individual" state={item2}><img style={{width:"300px"}}src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'/><br></br><p>{item2}</p></Link></td>))}
                
            </tr>
        </table>
        <div style={{marginTop:"20%"}}>
        <Footer /></div>
        </div>
    )
    }
  }

export default Friends
