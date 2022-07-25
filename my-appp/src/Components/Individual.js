// import React, { Component } from 'react'
import Navbar from './Navbar'
import './Friends.css'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect , useState} from 'react'
import './table.css'

function Individual() {
     
  const location = useLocation();
  const data1 = location.state;
    
    JSON.stringify(data1);
    // console.log(data1);

  const location2 = useLocation();
  const data13 = location2.state;
    
    JSON.stringify(data13);
    if(!data1)
      data1=data13;
    // console.log(data1);

    const location3 = useLocation();
    const data134 = location3.state;
      
      JSON.stringify(data134);
      if(!data1)
        data1=data134;

    const [users1,setUsers1] = useState({
      "id":[],
      "firstName":"",
      "lastName":"",
      "email":"",
      "password":"",
      "roles" : ["LENDER","BORROWER"]
  })
  const [req15,setReq15]=useState([{
    "amount": "",
    "amountPayed": "",
    "amountPayedBack": "",
    "days": "",
    "fromName": "",
    "interest": "",
    "toName": "",
    "transactionId": {"toEmail": "", "fromEmail": ""},
    "uniqueId": ""
  }])
  useEffect(() => {
    fetchData();
    fetchDatanx();
  }, [])

  const fetchData=() => {
    fetch("http://localhost:9002/auth/user/"+(data1),
    {
      method:"GET",
      // body:JSON.stringify(users),
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : JSON.parse(localStorage.getItem('token')) 
      },
    })
    .then(response => response.json())
    .then(result => {setUsers1((result));})
  }
  const fetchDatanx=() => {
    fetch("http://localhost:9002/transaction/all/"+(JSON.parse(localStorage.getItem('email')))+"/"+(data1),
    {
      method:"GET",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : JSON.parse(localStorage.getItem('token')) 
      }
    })
    .then(response => response.json())
    .then(result => {
                    setReq15((result));
    })
  }

  // const hist = [
  //   {
  //     sl_no: 1,
  //     date: '4-7-2022',
  //     amount: '5000',
  //     status: 'completed'
  //   }
  // ]
  // const histlist= 
  //  )
  // )
  const navigate = useNavigate()
  const removeHandler = () =>{
    fetch("http://localhost:9002/user/remove/connection/"+(JSON.parse(localStorage.getItem('email')))+"/"+(data1),
    {
      method:"GET",
      // body:JSON.stringify(users),
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : JSON.parse(localStorage.getItem('token')) 
      },
    }).then(navigate("./Friends"))
  }
    return (
      <div>
        <Navbar />
        <h1 className="head">{users1.firstName}</h1>
        <Link to="/Friends" style={{color:"#FF5B00",fontSize:"30px",float:"left"}}>Back</Link> 
        
         <table style={{marginTop:"4%",marginLeft:"15%"}}>
            <tr>
                <td><img style={{width:"300px"}}src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'/></td>
                <td style={{float:"right",color:"#FF5B00"}}>
                  <span>Name: {users1.firstName+" "+users1.lastName}</span><br></br>
                  <span style={{display:"flex"}}>Email: {users1.email}</span>
                </td>
                <td style={{marginLeft:"100px"}}>
                <div>
                <Link to="/Requestloan" className='link' state={data1}><button>Request Loan</button></Link><br></br>  
                <button onClick={removeHandler} style={{float:"right"}}>Unfriend</button>
                </div>
                </td>
            </tr>
        </table>
        <h1 style={{marginTop:"10%"}}>Previously requested loans</h1>
        {req15.map(hista => (<div>
        {users1.email!=hista.transactionId.fromEmail &&
        <table className='history'>
                  <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Interest</th>
                    <th>Duration</th>
                    <th>Action</th>
                  </tr>
                   
                  
    <tr style={{color:"#ff5b00",textAlign:"center"}}>
                    <td>{hista.toName}</td>
                    <td>{hista.amount}</td>
                    <td>{hista.interest}</td>
                    <td>{hista.days}</td>
                    <td><Link to={"/Detailsx"} state={hista.uniqueId}><button>View Details</button></Link></td>        
    </tr>
        </table>}</div>))}
        
      <Footer />  
      </div>
    )
  
}

export default Individual
