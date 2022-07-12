import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css"
function Contact()
{
    return(
        <>
        <Link to="/Dashbord" style={{color:"#FF5B00",fontSize:"30px"}}>Back</Link>
        <div className="Text">
            <center>       
        <h1 style={{fontSize: "50px"}}>Can we help you? </h1>
        <br></br>
        <img src="https://www.romdmaltacommunity.org/images/Contact_Us_1271_400.gif"/>
        <h2 style={{fontSize: "30px"}}>2payuback@customer.com</h2>
        
        <h2></h2>
        </center>
        </div>
        </>
    );
}
export default Contact;