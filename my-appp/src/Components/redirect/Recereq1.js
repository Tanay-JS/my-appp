import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

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
      <Link to="/Receivedreq" style={{color:"#FF5B00",fontSize:"30px",float:"left"}}>Back</Link> 
      <h1>Amount:{req12.amount}</h1>
      <h1>Duration:{req12.days}</h1>
      <h1>Interest:{req12.interest}</h1>
      <h1>Request from:{req12.fromName}</h1>
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleReject}>Reject</button>
      <h2>Note: Accepting a loan request means you're digitally signing the agreement automatically.</h2>
    </div>
  )
}

export default Recereq1