import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./searchbar.css";

function Searchbar() {
  const[email, setemail]= useState("");
  const handlesubmit =(e)=> {
    e.preventDefault();
    console.log(email)
    fetch("http://localhost:9002/user/connect/bn@bn.com/"+email, 
    {
      method: 'GET',
      headers: { 
        "Content-Type": "application/json",
        "Authorization" : "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjpbIkxFTkRFUiIsIkJPUlJPV0VSIl0sImlkIjp7InRpbWVzdGFtcCI6MTY1NzA5ODUzNiwiZGF0ZSI6MTY1NzA5ODUzNjAwMH0sInN1YiI6ImJuQGJuLmNvbSIsImlhdCI6MTY1NzA5ODYxNywiZXhwIjoxOTY4MTM4NjE3fQ.tg8fBG-kXg2uWucURoEbgjg2y52WXsySyq1igl8YrEFaGLC7RXU8zgZdIv9JeEpER4cGFY480chL4u9eivAGRw"
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