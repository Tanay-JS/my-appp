import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Detailsx() {

    const location = useLocation();
  const data1x = location.state;

    const [req16,setReq16]=useState({
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
      const [req17,setReq17]=useState({
        "amount": ""
      })
      const changeHandler= nm => {
        setReq17({...req17,[nm.target.name]:nm.target.value})
      }

      useEffect(() => {
        fetchTransactiondetails23();
      }, [])

      const fetchTransactiondetails23 = () =>{
        // setIsShown(current => !current);
        fetch("http://localhost:9002/transaction/"+(data1x),
        {
          method:"GET",
          // body:JSON.stringify(users),
          headers: {
            "Content-Type" : "application/json",
            "Authorization" : JSON.parse(localStorage.getItem('token')) 
          },
        })
        .then(response => response.json())
        .then(result => {setReq16(result)})
      }

      const paymentHandler =()=>{
        fetch("http://localhost:9002/transaction/pay/"+(req16.transactionId.fromEmail)+"/"+(req16.transactionId.toEmail)+"/"+(req16.uniqueId),
        {
          method:"POST",
          body:JSON.stringify(req17),
          headers: {
            "Content-Type" : "application/json",
            "Authorization" : JSON.parse(localStorage.getItem('token')) 
          },
        }).then(response => response.json())
        .then(result => {console.log(result)})
        .then(alert("Payment Successful"))
      } 


  return (
    <div>
        <Link to="/Individual" style={{color:"#FF5B00",fontSize:"30px",float:"left"}} state={req16.transactionId.toEmail}>Back</Link> 
        <h1>Loan took from:{req16.toName}</h1>
        <h1>Amount:{req16.amount}RS</h1>
        <h1>Duration:{req16.days}Days</h1>
        <h1>Interest:{req16.interest}% </h1>
        <h1>Amount peceived:{req16.amountPayed}</h1>
        <h1>Amount payed back:{req16.amountPayedBack}</h1>   
        <label style={{fontSize:"20px",marginRight:"10px"}}>Enter the amount of your choice:</label><input type="text" name="amount" onChange={changeHandler} placeholder='In Rupees' className='rounded'></input><br></br>
        <button onClick={paymentHandler}>Pay Back</button>
    </div>
  )
}

export default Detailsx