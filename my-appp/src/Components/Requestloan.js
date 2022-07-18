import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './RL.css';

function Requestloan() {
  const [data2,setData2] = useState({
    "fromName" : "",
    "toName" : "",
    "amount" : "",
    "amountPayed" : "0",
    "amountPayedBack" : "0",
    "days" : "",
    "interest" : ""
  })
  const [fname,setFname] = useState({
    "firstName" : ""
  })
  const [fname1,setFname1] = useState({
    "firstName" : ""
  })
  const location = useLocation();
  const data12 = location.state;
    
    JSON.stringify(data12);
   
    
    useEffect(() => {
      fetchData();
      fetchData2();
    }, [])
    const fetchData=() => {
      fetch("http://localhost:9002/auth/user/"+(data12),
      {
        method:"GET",
        // body:JSON.stringify(users),
        headers: {
          "Content-Type" : "application/json",
          "Authorization" : JSON.parse(localStorage.getItem('token')) 
        },
      })
      .then(response => response.json())
      .then(result => {setFname(result);
      })
      // .then(console.log(fname.firstName))
    }
    const fetchData2=() => {
      fetch("http://localhost:9002/auth/user/"+(JSON.parse(localStorage.getItem('email'))),
      {
        method:"GET",
        // body:JSON.stringify(users),
        headers: {
          "Content-Type" : "application/json",
          "Authorization" : JSON.parse(localStorage.getItem('token')) 
        },
      })
      .then(response => response.json())
      .then(result => {setFname1(result);
      })
      // .then(console.log(fname.firstName))
    }
    const huluhulu = fedx => {
      setData2({...data2,[fedx.target.name]:fedx.target.value})}
    //   setData2([data2.amount=fedx.amount],[data2.days=fedx.days],[data2.interest=fedx.interest])}

  const submitHandler1=()=>{
    {(setData2(data2.toName=(fname.firstName)))}
    {(setData2(data2.fromName=(fname1.firstName)))}
    console.log(data2)
    fetch("http://localhost:9002/transaction/send/borrow/request/"+(JSON.parse(localStorage.getItem('email')))+"/"+(data12),
        {
          method:"POST",
          body:JSON.stringify(data2),
          headers: {
            "Content-Type" : "application/json; charset=UTF-8",
            "Authorization" : JSON.parse(localStorage.getItem('token'))
        }  
        }
          
        ).then(response => response.json())
        .then(result => console.log(result))
        .then(res=> alert('Data Posted'))
        
        
    console.log("sent",data2)
  }

  return (

    <div>
         <Link to="/Individual" style={{color:"#FF5B00",fontSize:"30px"}} state={data12}>Back</Link>
         <div className='forms'>
        <h1>Request Loan</h1>
        <br></br>
        <form>
        <label>Amount:</label> <input type={"text"} name="amount" placeholder="Rupees" onChange={huluhulu}></input><br></br>
        <label>Interest:</label> &nbsp;<input type={"text"} name="interest" placeholder="Percentage" onChange={huluhulu}></input><br></br>
        <label>Duration:</label> <input type={"text"} name="days" placeholder="Days" onChange={huluhulu}></input><br></br>
        </form>
        <br></br>
        <button  className='button' onClick={submitHandler1}>Request</button>
        </div>
        {/* <p>toname={data2.toName}</p> */}
    </div>
  )
}

export default Requestloan;