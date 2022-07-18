import React, { useEffect, useState } from 'react'

function Receivedreq() {
    
    const [req,setReq]=useState({
        "pendingBorrowRequests": ""
    })

    useEffect(() => {
        fetchTransactions();
        bong();
      }, [])

    const fetchTransactions=() => {
        fetch("http://localhost:9002/transaction/user/details/"+((JSON.parse(localStorage.getItem('email')))),
        {
          method:"GET",
          // body:JSON.stringify(users),
          headers: {
            "Content-Type" : "application/json",
            "Authorization" : JSON.parse(localStorage.getItem('token')) 
          },
        })
        .then(response => response.json())
        .then(result => {setReq(result.pendingBorrowRequests)})
      }
      const bong =()=>{console.log(req)}



  return (
    <div>
        <h1>Received Loan Requests:</h1>
        {/* {pendingBorrowRequests.map(pbr=>(<p>{pbr}</p>))} */}
    </div>
  )
}

export default Receivedreq