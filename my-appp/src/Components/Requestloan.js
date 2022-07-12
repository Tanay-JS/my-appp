import React from 'react'
import { Link } from 'react-router-dom'
import './RL.css';

function Requestloan() {
  return (

    <div>
         <Link to="/Individual" style={{color:"#FF5B00",fontSize:"30px"}}>Back</Link>
         <div className='forms'>
        <h1>Request Loan</h1>
        <br></br>
        <form>
        <label>Amount:</label> <input type={"text"} placeholder="Rupees"></input><br></br>
        <label>Interest:</label> &nbsp;<input type={"text"} placeholder="Percentage"></input><br></br>
        <label>Duration:</label> <input type={"text"} placeholder="Days"></input><br></br>
        </form>
        <br></br>
        <button type='submit' className='button'>Request</button>
        </div>
    </div>
  )
}

export default Requestloan;