// import React, { Component } from 'react'
import Navbar from './Navbar'
import './Friends.css'
import Footer from './Footer'
import Prend from './prendu/Prend'
import { Link } from 'react-router-dom'
import Prend1 from './prendu/Prend1'
import Prend2 from './prendu/Prend2'

function Individual() {
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
        <h1 className="head"><Prend /></h1>
         <table>
            <tr>
                <td><img style={{width:"300px"}}src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'/></td>
                <td style={{float:"right",color:"#FF5B00"}}>
                  <span>Name: <Prend1 /></span><br></br>
                  <span style={{display:"flex"}}>Email: <Prend2 /></span>
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
