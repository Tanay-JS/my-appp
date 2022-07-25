import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./forcss.css"

function Recereq1() {
  const location = useLocation();
  const data16 = location.state;

  const [req12,setReq12]=useState({
    "amount": "",
    "amountPayed": "",
    "amountPayedBack": "",
    "days": "",
    "fromName": "",
    "interest": "",
    "toName": "",
    "transactionId": [{"toEmail": "", "fromEmail": ""}],
    "uniqueId": ""
  })
  
  useEffect(() => {
    // fetchTransactions();
    fetchTransactiondetails();
  }, [])

  const fetchTransactiondetails = () =>{
    // setIsShown(current => !current);
    fetch("http://localhost:9002/transaction/"+(data16),
    {
      method:"GET",
      // body:JSON.stringify(users),
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : JSON.parse(localStorage.getItem('token')) 
      },
    })
    .then(response => response.json())
    .then(result => {console.log(result);setReq12(result)})
  //   // return(<div></div>)
    // ))}
  // }
  }

  const handleAccept=()=>{
    fetch("http://localhost:9002/transaction/accept/borrow/request/"+(req12.transactionId.fromEmail)+"/"+(req12.transactionId.toEmail)+"/"+(req12.uniqueId),
    {
      method:"GET",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : JSON.parse(localStorage.getItem('token')) 
      },
    }).then(response => response.json())
    .then(result => {console.log(result)})
  }

  const handleReject=()=>{
    fetch("http://localhost:9002/transaction/remove/borrow/request/"+(req12.transactionId.fromEmail)+"/"+(req12.transactionId.toEmail)+"/"+(req12.uniqueId),
    {
      method:"GET",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : JSON.parse(localStorage.getItem('token')) 
      },
    }).then(response => response.json())
    .then(result => {console.log(result)})
  }


  return (
    <div>

      <Link to="/Receivedreq" style={{color:"#FF5B00",fontSize:"30px",float:"left"}}>Back</Link> <br></br>
      
      <div className='forcss'>
      <h1 style={{fontSize:"50px"}}>Payment Details</h1> <br></br>
      <center>
      <table className='ta'>
      <tr>
          <td className='ta' style={{align:"left"}}>Name :</td>
          <td className='ta'>{req12.fromName}</td>
        </tr>
        <tr className='ta'>
          <td className='ta' style={{align:"left"}}>Amount :</td>
          <td className='ta'>{req12.amount}</td>
        </tr>
        <tr>
        <td className='ta' style={{align:"left"}}>Days :</td>
          <td className='ta'>{req12.days}</td>
          </tr>
          <tr>
          <td className='ta' style={{align:"left"}}>interest :</td>
          <td className='ta'>{req12.interest}</td>
          </tr>
          
      </table>
      <br></br>
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleReject}>Reject</button>
      </center>
      </div>
      
    </div>
  )
}

export default Recereq1