// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "email": "sanjay@gmail.com",
//   "password": "12345",
//   "roles": [
//     "LENDER",
//     "BORROWER"
//   ]
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://localhost:9002/auth/login/sanjay@gmail.com", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
































// // import React,{useState} from 'react';
// // import axios from 'axios';
// // import './Main.css';
// // import Navbar from './Navbar1';
// // // import { BrowserRouter, Routes,Route } from 'react-router-dom';
// // import {Link} from "react-router-dom"
// // import { render } from '@testing-library/react';
// // // import Login from './Main';




// // const Login =() =>{ {

  
  
// //   const changeHandler= e=>{
// //     setData({...data,[e.target.name]:e.target.value})
    
// //   } 

// //   const handleSubmit = e => {
// //     e.preventDefault();
// //     const [data,setData] = useState({
// //         email:" ",
// //         password:" ",
// //         roles : ["LENDER","BORROWER"]
    
// //       })
// //       axios.post('http://localhost:9002/auth/login/{e.target.email}',data)
// //       .then(res => {
// //         console.log(res)
// //       })
// //       .catch(err => {
// //         console.log(err)
// //       })
    
// //   };

// //   return(

    

// //     <div>
      
      
// //       <center>
// //       <Navbar/>
// //         {/* <img src={require('./Hello.jpeg')} height="70px" width="350px" ></img> */}
// //       </center>
      
// //       <Link to="/Home" style={{color:"#FF5B00",fontSize:"30px"}}>Back</Link>

    
    
    
    

// //     <div className='border'>
 
// //       <center onSubmit={this.handleSubmit}>

      
// //       <form >
// //         <label style={{'color': '#ff5b00','fontFamily':'Tahoma'}} >  EMAIL   : </label>
// //         <input type="email" name="email" placeholder="Email" id="username" onChange={changeHandler} class="rounded"/>
// //         <br></br>
// //         <br></br>
// //         <label style={{'color': '#ff5b00','fontFamily':'Tahoma'}}>PASSWORD : </label>
// //         <input type="password" name="password" placeholder="Password" id="pass" onChange={changeHandler} class="rounded"/>
// //         <br></br>
// //         {/* <p id="text" style={{'color': '#ff5b00','fontFamily':'Tahoma'}}>CAPS IS ON</p> */}
// //         <br></br>
// //         <br></br>
// //         <input type="checkbox" ></input>
        
// //         <label style={{'color': '#ff5b00','fontFamily':'Tahoma'}}> SHOW PASSWORD </label>
// //         <br></br>
    
      
   
      



// // <br></br>

// //      <input type="submit" value="Submit" class="button"></input>
// //      <br></br>
// //      <br></br>
// //      <input type="reset" value="reset" class="reset"></input>
      


// //      <h3 style={{'color': '#ff5b00','fontFamily':'Tahoma'}}>Authenticate using</h3>
// //      <br></br>
// //      {/* <Login/> */}
      
          
// //      <br></br>
// //      <h3 style={{'color': '#ff5b00','fontFamily':'Tahoma'}}> NOT REGISTERED </h3>
// //      <br></br>
// //      <button style={{'color': '#ff5b00','fontFamily':'Tahoma'}}><Link to="/RegistrationForm">Sign Up</Link></button>

     

     
     
     
   
    
// //     </form>
// //     </center>
    
// //     </div>
  
    
    
// //   </div>
  
  
  
// //   )
// //   }




// // }
// // export default Login