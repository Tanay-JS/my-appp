import React from 'react'
import { Link } from 'react-router-dom'
import './RL.css';

function Sendloan() {
  const sloan = [
    {
      slid: '',
      amount: '',
      interest: '',
      duration: ''

    }
  ]
    return (
      <div>
          <Link to="/Individual" style={{color:"#FF5B00",fontSize:"30px"}}>Back</Link>
          <div className='forms'>
          <h1>Send Loan</h1>
          <form>
          <label>Amount:</label> <input type={"text"} placeholder="in rupees" value={amount}></input><br></br>
          <label>Interest:</label> <input type={"text"} placeholder="in percentage" value={interest}></input><br></br>
          <label>Duration:</label> <input type={"text"} placeholder="in days" value={duration}></input><br></br>
          </form>
          <button type='submit' className='button'>Send</button>
          </div>
      </div>
    )
  }
  
  export default Sendloan;


