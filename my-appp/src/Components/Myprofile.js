import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Myprofile.css'
import './table.css'


function Home() {
  
  const [users,setUsers] = useState({
    "id":[],
    "firstName":"",
    "lastName":"",
    "email":"",
    "password":"",
    "roles" : ["LENDER","BORROWER"]
})

const [reqxs1,setReqxs1]=useState({
  "acceptedBorrowRequests": [{
   "uniqueId":[],
   "name":[],
   "email":[],
   "amount":[]
  }],
  "borrowRequests": [{
   "uniqueId":[],
   "name":[],
   "email":[],
   "amount":[]
  }],
  "email": "",
  "firstName": "",
  "lastName": "",
  "pendingBorrowRequests": []
})

  useEffect(() => {
    fetchData();
    fetchTransactions1();
  }, [])


  const fetchData=() => {
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
    .then(result => {
                    setUsers((result));
    })
  }

  const fetchTransactions1= () => {
      fetch("http://localhost:9002/transaction/user/details/"+((JSON.parse(localStorage.getItem('email')))),
      {
        method:"GET",
        headers: {
          "Content-Type" : "application/json",
          "Authorization" : JSON.parse(localStorage.getItem('token')) 
        },
      })
      .then(response => response.json())
      .then(result => {setReqxs1(result);})
  }


  
    return (
      // users.map(userb => {
      // return(
      <div>
        <Navbar/>

        <h1 className='head'>{users.firstName}</h1> 
        <div className='body'>
         
        <table className='stu'>
            <tr>
                <td><img style={{width:"300px"}}src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'/></td>
                <td style={{float:"right",color:"#FF5B00"}}> 
                <span className='details'>Fullname: {users.firstName+" "+users.lastName}</span><br></br>
                <span style={{display:"flex"}}>Email: {users.email}</span>
                </td>
                
            </tr>
        </table>
        <table className='history'>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Days</th>
            <th>Duration</th>
          </tr>
        </table>
        
        </div>
        <Footer />
       </div>
      //  )})
    )
   
}

export default Home