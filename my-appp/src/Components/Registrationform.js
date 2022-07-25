import React, {useState,useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Navbar1 from './Navbar1';
import './registration.css'
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';



const RegistrationForm=() =>{
    const [data,setData] = useState({
      "firstName":" ",
      "lastName":" ",
      "email":"",
      "password":"",
      "confirmPassword":"",
      "roles" : ["LENDER","BORROWER"]
  })

    const changeHandler= e=>{
        setData({...data,[e.target.name]:e.target.value})
        
      }
  
    const submitHandler = e =>{
        e.preventDefault();

        var x = document.forms["myForm"]["firstName"].value;
          if (x == "" || x == null) {
            alert("Name must be filled out");
            return false;
          }
          var y = document.forms["myForm"]["lastName"].value;
          if (y == "" || y == null) {
            alert("Name must be filled out");
            return false;
          }
          var z = document.forms["myForm"]["email"].value;
          if (z == "" || z == null) {
            alert("Email must be filled out");
            return false;
          }
          var a = document.forms["myForm"]["password"].value;
          if (a == "" || a == null) {
            alert("Password must be filled out");
            return false;
          }
          var b = document.forms["myForm"]["confirmPassword"].value;
          if (b == "" || b == null) {
            alert("Confirm your password");
            return false;
          }






        console.log(data.email)
        localStorage.setItem('email',JSON.stringify(data.email))
        fetch("http://localhost:9002/auth/register/"+(JSON.parse(localStorage.getItem('email'))),
        {
          method:"POST",
          body:JSON.stringify(data),
          headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        }
        }
          
        ).then(response => response.json())
        .then(result => console.log(result))
        .then(res=> alert('Data Posted'))
        
        
      }    

      


  



    return(
    <div>
    <Navbar1/>
    
    
        
    <Link to="/Home" style={{color:"#FF5B00",fontSize:"30px"}}>Back</Link>
    <div>
        <form className='hey' onSubmit={submitHandler} name="myForm" method='post' required >
        <h1>CREATE AN ACCOUNT</h1>
            
           <div className='label'>
          
          
            
          
            <br></br>
                          
      <input  type="text" name="firstName" placeholder="First Name" class="rounded" onChange={changeHandler}/>
                  <br></br><br></br>

              
              
              <input  type="text" name="lastName"  placeholder="Last Name" class="rounded" onChange={changeHandler}/>
                  <br></br>
                  <br></br>
             
           <input  type="email" name="email" placeholder="Email" class="rounded" onChange={changeHandler}/>
                  <br></br>
                  <br></br>

                 
                  <input  type="password"  name="password" placeholder="Password"  class="rounded" onChange={changeHandler}  />
                  

                  <br></br>
                  <br></br>
                  
                  
              
             <input type="password" name="confirmPassword" placeholder="Confirm Password" class="rounded" onChange={changeHandler}  />
                  
                
                  <br></br>
                  <br></br>
                  <br></br>
             
              <button type="submit"  className="btn">Register</button>
              <br></br>
              <br></br>
             
              <button><Link to="/Main">Sign In</Link></button>
              
              </div>
        </form>
        
          
    </div>
    </div>
    
    
    )       
}





export default RegistrationForm;


