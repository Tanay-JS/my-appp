import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function FriendReq() {
    const [req, setreq] =useState({

"connectionRequests": [],
"connections": [],
"email": "",
"pendingRequests": []
    })
    useEffect(() => {
        apiGet()
        // componentDidMount()
      }, [])
    

    const apiGet = () => {
        fetch('http://localhost:9002/user/details/'+(JSON.parse(localStorage.getItem('email'))), {
          headers: { 
        
            "Authorization" : JSON.parse(localStorage.getItem('token')) 
          } 
        })
        .then(response=>response.json())
        .then(result=>{console.log(result);
            setreq(result);
        }
            )
        
        };
        
        return(
          <div>
            <Link to="/Friends" style={{color:"#FF5B00",fontSize:"30px"}}>Back</Link> 
            <h1>Friend Requests</h1>
            <center>
            <table>
            <tr>
                <th>Email</th>
                <th>Status</th>
                </tr>
            {req.connectionRequests.map((item) =><h2>{item}</h2>)}
          
            </table>
            </center>
            </div>
        );
}
export default FriendReq;