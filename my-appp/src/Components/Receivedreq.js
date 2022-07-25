import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Recereq from './redirect/Recereq1';
import "./Receivedreq.css"


function Receivedreq() {

  // const [isShown, setIsShown] = useState(false);
    
    const [reqxs,setReqxs]=useState({
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
    // const [req1,setReq1]=useState({
    //   "amount": "",
    //   "amountPayed": "",
    //   "amountPayedBack": "",
    //   "days": "",
    //   "fromName": "",
    //   "interest": "",
    //   "toName": "",
    //   "transactionId": [{"toEmail": "", "fromEmail": ""}],
    //   "uniqueId": ""
    // })

    useEffect(() => {
        fetchTransactions();
        // fetchTransactiondetails();
      }, [])

      const fetchTransactions= () => {
        // const ft1 = 
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
          .then(result => {setReqxs(result);})
        
        //   const uid = reqxs.borrowRequests.map(pbr2=>(pbr2.uniqueId))
        // const ft2 =
         
      }

      // const fetchTransactiondetails = (pbr) =>{
      //   setIsShown(current => !current);
      //   fetch("http://localhost:9002/transaction/"+(pbr.uniqueId),
      //   {
      //     method:"GET",
      //     // body:JSON.stringify(users),
      //     headers: {
      //       "Content-Type" : "application/json",
      //       "Authorization" : JSON.parse(localStorage.getItem('token')) 
      //     },
      //   })
      //   .then(response => response.json())
      //   .then(result => {console.log(result);setReq1(result)})
      // //   // return(<div></div>)
      //   // ))}
      // // }
      // }


  return (
    <div>

      <Link to="/Friends" style={{color:"#FF5B00",fontSize:"30px",float:"top"}}>Back</Link> 
      <center>
        <h1 style={{marginTop:"5%",fontSize:"50px"}}>Received Loan Requests:</h1>
        <table className='tab' style={{width:"50%",borderCollapse: "collapse"}}>
          <tr>
    
            <th>Name</th>
            <th>Amount</th>
          
          </tr>
        {reqxs.borrowRequests.map(pbr=>(<><tr>
        <td className='tab'>{pbr.name}</td> <td className='tab'>{pbr.amount} Rs</td>  <td ><Link to={"/Recereq1"} state={pbr.uniqueId}><button>View details</button></Link></td>
        </tr></>))}</table>
        <h1 style={{marginTop:"5%",fontSize:"50px"}}>Accepted Loan Requests:</h1>
        <table className='tab' style={{width:"50%",borderCollapse: "collapse"}}>
        <tr>
    
    <th>Name</th>
    <th>Amount</th>
  
  </tr>
          {reqxs.acceptedBorrowRequests.map(pbr1=>(<><tr><td className='tab'>{pbr1.name}</td> <td className='tab'>{pbr1.amount} RS</td> <td><Link to={"/Accereq"} state={pbr1.uniqueId}><button>View details</button></Link></td></tr></>))}</table>
        </center>
    </div>
  )
}

export default Receivedreq


{/* <Recereq name={pbr.uniqueId}> </Recereq>  */}