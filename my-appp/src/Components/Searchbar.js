import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./searchbar.css";

function Searchbar() {
  const[email, setemail]= useState("");
  const handlesubmit =(e)=> {
    e.preventDefault();
    console.log(email)
    fetch("http://localhost:9002/user/connect/"+(JSON.parse(localStorage.getItem('email')))+"/"+email, 
    {
      method: 'GET',
      headers: { 
        "Content-Type": "application/json",
        "Authorization" : JSON.parse(localStorage.getItem('token'))
      } 
    }).then( ()=> {
      console.log('Request Sent');
      
    })
  }
return(
    <div className ="search">
     <Link to="/Friends" style={{color:"#FF5B00",fontSize:"30px"}}>Back</Link> 
     <h1 className="req">Send Request</h1>
 <br></br>

    <div className="bar">
      <form onSubmit={handlesubmit}>
    < input  
    type="text"
    placeholder="Enter Email"
    value={email}
    onChange={(e)=> setemail(e.target.value)} />
   <br></br>
   <br></br>
    <button type="Submit">Send</button>
    </form>
 </div>
 </div>
 
);
}


export default Searchbar;