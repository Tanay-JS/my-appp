import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./searchbar.css";

function Searchbar() {

  const [isShown, setIsShown] = useState(false);

  
  const[email, setemail]= useState("");
  const handlesubmit =(e)=> {
    e.preventDefault();
    console.log(email)
    fetch("http://localhost:9002/user/connect/"+(JSON.parse(localStorage.getItem('email')))+"/"+email, 
    {
      method: 'GET',
      headers: { 
        "Content-Type": "application/json",
        "Authorization" :JSON.parse(localStorage.getItem('token')) 
      } 
    }).then( ()=> {
      console.log('Request Sent');
      
    }).then(alert("Sent!"))
  }
const [pen, penreq] =useState({
  
      "connectionRequests": [],
      "connections": [],
      "email": "",
      "pendingRequests": []
          })

          
      
          const pr = () => {
            setIsShown(current => !current);
              fetch('http://localhost:9002/user/details/'+(JSON.parse(localStorage.getItem('email'))), {
                headers: { 
              
                  "Authorization" : JSON.parse(localStorage.getItem('token')) 
                } 
              })
              .then(response=>response.json())
              .then(result=>{console.log(result);
                  penreq(result);
              })
              // .then(console.log(pen.pendingRequests[1]))
                  
              
              };

              const handleUnsend=(item)=>{
     
                fetch("http://localhost:9002/user/remove/request/"+(JSON.parse(localStorage.getItem('email')))+"/"+(item), 
               {
                   method: 'GET',
                   headers: { 
                   "Content-Type": "application/json",
                   "Authorization" :JSON.parse(localStorage.getItem('token')) 
               } 
               }).then(alert('Successfully unsent'))
               .then(window.location.reload())
              }
              
return(
    <div className ="search">
     <Link to="/Friends" style={{color:"#FF5B00",fontSize:"30px"}}>Back</Link> 
     <h1 className="req">Send Request</h1>
 <br></br>

    <div className="bar">
      <form onSubmit={handlesubmit}>
    < input  
    type="email"
    placeholder="Enter Email"
    value={email}
    onChange={(e)=> setemail(e.target.value)} style={{padding: "3px",
    borderRadius:"10px"}}/>
   <br></br>
   <br></br>
    <button type="Submit">Send</button>
    </form>
    <br></br>
    <br></br>
    <button onClick={pr}>Sent Requests</button>
    <br></br>
    <br></br>
 <center>
 {isShown && ( 
  <div>
    {pen.pendingRequests.map((item)=>(<ul className="ul1"><li className="li1">{item}<button onClick={()=> handleUnsend(item)}>Unsend</button></li></ul>))}
  </div>
  )}
</center>
 </div>
 </div>
 
);
}


export default Searchbar;