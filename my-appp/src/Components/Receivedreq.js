import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Recereq from './redirect/Recereq1';

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
        <h1 style={{marginTop:"5%",fontSize:"75px"}}>Received Loan Requests:</h1>
        {reqxs.borrowRequests.map(pbr=>(<div><h1>{pbr.name} {pbr.amount} RS </h1><Link to={"/Recereq1"} state={pbr.uniqueId}><button>View details</button></Link></div>))}
        <h1 style={{marginTop:"5%",fontSize:"75px"}}>Accepted Loan Requests:</h1>
        {reqxs.acceptedBorrowRequests.map(pbr1=>(<div><h1>{pbr1.name} {pbr1.amount} RS</h1><Link to={"/Accereq"} state={pbr1.uniqueId}><button>View details</button></Link></div>))}  
    </div>
  )
}

export default Receivedreq


{/* <Recereq name={pbr.uniqueId}> </Recereq>  */}