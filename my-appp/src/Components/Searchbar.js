import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./searchbar.css";
// import axios from "axios"

class Searchbar extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {

        console.log(this.state)
        
      }
render()
{
return(
    <div className ="search">
     <Link to="/Friends" style={{color:"#FF5B00",fontSize:"30px"}}>Back</Link> 
     <h1 className="req">Send Request</h1>
 <br></br>

    <div className="bar">
    <input type="text" id="in"placeholder="Enter Number"onChange={this.handleChange}></input>
   <br></br>
   <br></br>
    <button className="butto" type="submit" onClick={this.handleSubmit}>Send</button>
 </div>
 </div>
);
}
}

export default Searchbar;