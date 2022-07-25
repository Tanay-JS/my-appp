import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './forcss.css';
function Accereq() {

    const location = useLocation();
  const data17 = location.state;

  const [req13,setReq13]=useState({
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
  const [req14,setReq14]=useState({
    "amount": ""
  })

  const [usersn,setUsersn] = useState({
    "id":[],
    "firstName":"",
    "lastName":"",
    "email":"",
    "password":"",
    "roles" : ["LENDER","BORROWER"]
  })
  
  useEffect(() => {
    // fetchTransactions();
    fetchTransactiondetails();
    fetchDatan();
  }, [])

  const fetchTransactiondetails = () =>{
    // setIsShown(current => !current);
    fetch("http://localhost:9002/transaction/"+(data17),
    {
      method:"GET",
      // body:JSON.stringify(users),
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : JSON.parse(localStorage.getItem('token')) 
      },
    })
    .then(response => response.json())
    .then(result => {setReq13(result)})
  }
  const fetchDatan=() => {
    fetch("http://localhost:9002/auth/user/"+(JSON.parse(localStorage.getItem('email'))),
    {
      method:"GET",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : JSON.parse(localStorage.getItem('token')) 
      }
    })
    .then(response => response.json())
    .then(result => {console.log(result);
                    setUsersn((result));
    })
  }

  const handlePayment =()=>{
    // setReq14(req13.amount=req14.amount)
    setReq14((req14.amount=req13.amount))
    console.log(JSON.stringify(req14))
    fetch("http://localhost:9002/transaction/pay/"+(req13.transactionId.toEmail)+"/"+(req13.transactionId.fromEmail)+"/"+(req13.uniqueId),
    {
      method:"POST",
      body:JSON.stringify(req14),
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : JSON.parse(localStorage.getItem('token')) 
      },
    }).then(response => response.json())
    .then(result => {console.log(result)})
    .then(alert("Payment Successful"))
  } 

  const handleRemove =()=>{
    // setReq14(req13.amount=req14.amount)
    setReq14((req14.amount=req13.amount))
    console.log(JSON.stringify(req14))
    fetch("http://localhost:9002/transaction/remove/accepted/borrow/request/"+(req13.transactionId.fromEmail)+"/"+(req13.transactionId.toEmail)+"/"+(req13.uniqueId),
    {
      method:"GET",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : JSON.parse(localStorage.getItem('token')) 
      },
    }).then(response => response.json())
    .then(result => {console.log(result)})
    // .then(window.location.reload())
  }

  return (
    <div><Link to="/Receivedreq" style={{color:"#FF5B00",fontSize:"30px",float:"left"}}>Back</Link> 
    <center>
    <table className='ta'>
      <tr>
        <td className='ta'>Request From:</td>
        <td className='ta'>{req13.fromName}</td>
      </tr>
      <tr>
    <td className='ta'>Amount:</td>
   <td className='ta'> {req13.amount}</td>
    </tr>
    <tr>
      <td className='ta'>Duration:</td>
    <td className='ta'>{req13.days}</td>
    </tr>
    <tr>
      <td className='ta'>Interest:</td>
    <td className='ta'>{req13.interest}</td>
    </tr>
    <tr>
      <td className='ta'>Amount Payed:</td>
    <td className='ta'>{req13.amountPayed}</td>
    </tr>
    <tr>
      <td className='ta'>Amount Payed Back:</td>
    <td className='ta'>{req13.amountPayedBack}</td>
    </tr>
    </table>
   {req13.amountPayed!=req13.amount && req13.fromName!=usersn.firstName &&
      <button onClick={handlePayment}>Pay Rs {req13.amount}</button>
    
    }
    
    <button onClick={handleRemove}>Remove</button>
    </center> 
    </div>
  )
}

export default Accereq











