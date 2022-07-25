import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./details.css"

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
        <br></br>
        <center>
        <table className='details'>
          <tr>
        <td className='detail'>Loan took from:</td >
        <td className='detail'>{req16.toName}</td >
        </tr>
        <tr>
        <td className='detail'>Amount:</td >
          <td className='detail'>{req16.amount} Rs</td>
        </tr>
        <tr>
        <td className='detail'>Duration:</td >
          <td className='detail'>{req16.days} Days</td >
        </tr>
        <tr>
        <td className='detail'>Interest:</td >
        <td className='detail'>{req16.interest} % </td >
        </tr>
        <tr>
        <td className='detail'>Amount peceived:</td>
        <td className='detail'>{req16.amountPayed}</td>
        </tr>
        <tr>
        <td className='detail'>Amount payed back:</td >
        <td className='detail'>{req16.amountPayedBack}</td>
        </tr>
        </table>
        </center>   
        <br></br>
        <label style={{fontSize:"20px",marginRight:"10px"}}>Enter the amount of your choice:</label><input type="text" name="amount" onChange={changeHandler} placeholder='In Rupees' className='rounded'></input>
        <br></br><br></br>
        <button onClick={paymentHandler}>Pay Back</button>
    </div>
  )
}

export default Detailsx