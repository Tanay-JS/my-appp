// import React, { Component } from 'react'
import Navbar from './Navbar'
import './Friends.css'
import Footer from './Footer'
import Prend from './prendu/Prend'
import { Link } from 'react-router-dom'
import Prend1 from './prendu/Prend1'
import Prend2 from './prendu/Prend2'
import { useLocation } from 'react-router-dom'
import { useEffect , useState} from 'react'

function Individual() {
     
  const location = useLocation();
  const data1 = location.state;
    
    JSON.stringify(data1);
    console.log(data1);

    const [users1,setUsers1] = useState({
      "id":[],
      "firstName":"",
      "lastName":"",
      "email":"",
      "password":"",
      "roles" : ["LENDER","BORROWER"]
  })
  
  useEffect(() => {
    fetchData()
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


  const hist = [
    {
      sl_no: 1,
      date: '4-7-2022',
      amount: '5000',
      status: 'completed'
    }
  ]
  const histlist= hist.map(hista => (
    <tr style={{color:"#ff5b00",textAlign:"center"}}>
                    <td>{hista.sl_no}</td>
                    <td>{hista.date}</td>
                    <td>{hista.amount}</td>
                    <td>{hista.status}</td>
    </tr>
   )
  )
  
  
    return (
      <div>
        <Navbar />
        <h1 className="head">{users1.firstName}</h1>
        <Link to="/Friends" style={{color:"#FF5B00",fontSize:"30px",float:"left"}}>Back</Link> 
         <table>
            <tr>
                <td><img style={{width:"300px"}}src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'/></td>
                <td style={{float:"right",color:"#FF5B00"}}>
                  <span>Name: {users1.firstName+" "+users1.lastName}</span><br></br>
                  <span style={{display:"flex"}}>Email: {users1.email}</span>
                </td>
                <td>
                <ul>
                <li><Link to="/Sendloan">Send Loan</Link></li><br></br>
                <li><Link to="/Requestloan">Request Loan</Link></li>
                </ul>
                </td>
            </tr>
        </table>
        <table className='history'>
                  <tr>
                    <th>SL number</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                  {/* <tr style={{color:"#ff5b00",textAlign:"center"}}>
                    <td>1</td>
                    <td>asd</td>
                    <td>asdf</td>
                    <td>adfs</td>
                  </tr> */}
                  {histlist}
        </table>
        
      <Footer />  
      </div>
    )
  
}

export default Individual
