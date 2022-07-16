
import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
// import "./styles.css";
// import AngryJoe from './components/AngryJoe';
// import * as Cards from './components/cards';


class FriendReq extends Component {
  


  // constructor(freq1) {
  //   super(freq1)
  
  //   this.state = {
  //     selectedFreq: ''
  //   }
  // }
  // state = {
  //   selectedFreq: ''
  // };

  constructor(props) {
    super(props)
  
    this.state = {   
      "connectionRequests": [],
      "connections": [],
      "email": "",
      "pendingRequests": [],
      selectedFreq: ''
    }
    this.handleAccept = this.handleAccept.bind(this)
  }

  componentDidMount(){
      fetch('http://localhost:9002/user/details/'+(JSON.parse(localStorage.getItem('email'))), {
        headers: { 
      
          "Authorization" : JSON.parse(localStorage.getItem('token')) 
        } 
      })
      .then(response=>response.json())
      .then(result=>{console.log(result);
          this.setState((result));
      })
      // .then(console.log(pen.pendingRequests[1]))
          
      
      };

      handleAccept(){
     
        fetch("http://localhost:9002/user/accept/request/"+(JSON.parse(localStorage.getItem('email')))+"/"+(this.state.selectedFreq), 
       {
           method: 'GET',
           headers: { 
           "Content-Type": "application/json",
           "Authorization" :JSON.parse(localStorage.getItem('token')) 
       } 
       }).then(alert('Successfully accepted'))
       .then(window.location.reload())
      }
      handleReject(){
     
        fetch("http://localhost:9002/user/remove/request/"+(JSON.parse(localStorage.getItem('email')))+"/"+(this.state.selectedFreq), 
       {
           method: 'GET',
           headers: { 
           "Content-Type": "application/json",
           "Authorization" :JSON.parse(localStorage.getItem('token')) 
       } 
       }).then(alert('Successfully rejected'))
       .then(window.location.reload())
      }





  render(){
    return (
      <Fragment>
             <Link to="/Friends" style={{color:"#FF5B00",fontSize:"30px"}}>Back</Link> 
             <div>
              {this.state.connectionRequests.map((item1)=>(<ul className="ul1"><li className="li1">{item1}</li></ul>))}
             </div>
        <section className="app-section container">
          {this.renderCardSelector()}

          <div className="top-margin-small">
            {this.renderSelectedCard(this.state.selectedFreq)}
          </div>
        </section>
      </Fragment>
    );
  }


  renderCardSelector() {
    return (
      <div className="form-group top-margin-small">
        <label style={{fontSize:"30px"}}>Accept or Reject friend requests</label>
        <select className="card-selector form-control"
          onChange={(e) => this.setState({ selectedFreq: e.target.value })}>
          <option></option>
          {this.state.connectionRequests.map((freq)=> <option>{freq}</option>)}
          {/* <option>CardB</option> */}
        </select>
      </div>
    );
  }


  renderSelectedCard(selectedFreq) {
    if (!selectedFreq)
      return (
      <div>  
      <p style={{fontSize:"20px"}}>select a friend request</p>
      </div>
      );
    
    
      // var toemail = selectedFreq;
      return(
        <div>
        <p style={{fontSize:"20px"}}>{selectedFreq}</p>
        <button onClick={this.handleAccept}>Accept</button>
        <button onClick={this.handleReject}>Reject</button>
        </div>  
       )


    // const Card = Cards[selectedCardType];

    // return <Card />;
  }
}
export default FriendReq

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);





// import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";

// function FriendReq() {
//     const [req, setreq] =useState({

// "connectionRequests": [],
// "connections": [],
// "email": "",
// "pendingRequests": []
//     })
//     useEffect(() => {
//         apiGet()
//         // componentDidMount()
//       }, [])
    

//     const apiGet = () => {
//         fetch('http://localhost:9002/user/details/'+(JSON.parse(localStorage.getItem('email'))), {
//           headers: { 
        
//             "Authorization" : JSON.parse(localStorage.getItem('token')) 
//           } 
//         })
//         .then(response=>response.json())
//         .then(result=>{console.log(result);
//             setreq(result);
//         }
//             )
        
//         };
        
//         return(
//           <div>
//             <Link to="/Friends" style={{color:"#FF5B00",fontSize:"30px"}}>Back</Link> 
//             <h1>Friend Requests</h1>
//             <center>
//             <table>
//             <tr>
//                 <th>Email</th>
//                 <th>Status</th>
//                 </tr>
//             {req.connectionRequests.map((item) =><h2>{item}</h2>)}
          
//             </table>
//             </center>
//             </div>
//         );
// }
// export default FriendReq;
