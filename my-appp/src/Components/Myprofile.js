import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


function Home() {
  
  const [users,setUsers] = useState({
    "id":[],
    "firstName":"",
    "lastName":"",
    "email":"",
    "password":"",
    "roles" : ["LENDER","BORROWER"]
})

  // constructor() {
  //   super()
  
  //   this.state = {
  //      users : 
  //       {
  //           "firstName": "",
  //           "lastName": "",
  //           "email": ""
  //       }
       
  //   }
  // }

  useEffect(() => {
    fetchData()
    // componentDidMount()
  }, [])


  const fetchData=() => {
    // preventDefault();
    // console.log(e.target.email)
    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('token'))
    // const url="http://localhost:9002/auth/user/"+(JSON.parse(localStorage.getItem('email')))
    fetch("http://localhost:9002/auth/user/"+(JSON.parse(localStorage.getItem('email'))),
    {
      method:"GET",
      // body:JSON.stringify(users),
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : JSON.parse(localStorage.getItem('token')) 
      },
      // mode:"no-cors"
    })
    .then(response => response.json())
    .then(result => {console.log(result);
                    setUsers((result));
    })
    // .then(console.log(users))
    // .then(result => this.setState({users : (result)}))
    // .then(console.log(this.state.users))
    // .catch(err => console.log(err))

  }


  
    return (
      // users.map(userb => {
      // return(
      <div>
        <Navbar/>

        <h1 className='head'>{users.firstName}</h1> 
        <div className='body'>
         
        <table style={{marginBottom:"100px"}}>
            <tr>
                <td><img style={{width:"300px"}}src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'/></td>
                <td style={{float:"right",color:"#FF5B00"}}> 
                <span className='details'>Fullname: {users.firstName+" "+users.lastName}</span><br></br>
                <span style={{display:"flex"}}>Email: {users.email}</span>
                </td>
                
            </tr>
        </table>
        {/* <img src={require('./logo.jpeg')} className="pic"/> */}
        {/* <User /> */}
        
        </div>
        <Footer />
       </div>
      //  )})
    )
   
}

export default Home