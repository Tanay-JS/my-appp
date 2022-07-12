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
        <form className='hey' onSubmit={submitHandler}  >
            
           
          
          
            
            <h1>REGISTRATION FORM</h1>
            <br></br>
                            
                  <label style={{'color': '#ff5b00','fontFamily':'Tahoma'}} >FIRST NAME :  </label>
                  
                  <input  type="text" name="firstName" placeholder="First Name" class="rounded" onChange={changeHandler}/>
                  <br></br>
                  <br></br>
              
              
                  <label style={{'color': '#ff5b00','fontFamily':'Tahoma'}} for="lastName">LAST NAME : </label>
                  <input  type="text" name="lastName"  placeholder="LastName" class="rounded" onChange={changeHandler}/>
                  <br></br>
                  <br></br>
             
                  <label style={{'color': '#ff5b00','fontFamily':'Tahoma'}} for="email">EMAIL : </label>
                  <input  type="email" name="email" placeholder="Email" class="rounded" onChange={changeHandler}/>
                  <br></br>
                  <br></br>

                  <label style={{'color': '#ff5b00','fontFamily':'Tahoma'}} for="password">PASSWORD :  </label>
                  <input  type="password"  name="password" placeholder="Password"  class="rounded" onChange={changeHandler}  />
                  

                  <br></br>
                  <br></br>
                  
                  
              
                  <label style={{'color': '#ff5b00','fontFamily':'Tahoma'}}>CONFIRM PASSWORD :  </label>
                  <input type="password" name="confirmPassword" placeholder="Confirm Password" class="rounded" onChange={changeHandler}  />
                  
                
                  <br></br>
                  <br></br>
                  <br></br>
             
              <button type="submit"  className="btn">Register</button>
              
             
        </form>
        
          
    </div>
    </div>
    
    
    )       
}





export default RegistrationForm;


