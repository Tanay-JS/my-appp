// import React, { Component } from 'react'

//  class Searchbarunsend extends Component {
  
  

   
//   //  pr(){
//   //   setIsShown(current => !current);
//   //     fetch('http://localhost:9002/user/details/'+(JSON.parse(localStorage.getItem('email'))), {
//   //       headers: { 
      
//   //         "Authorization" : JSON.parse(localStorage.getItem('token')) 
//   //       } 
//   //     })
//   //     .then(response=>response.json())
//   //     .then(result=>{console.log(result);
//   //         penreq(result);
//   //     })
//   //   }

//   render() {
//     return (
//        <div>
//         HI
//        </div>
//     )
//   }
// }

// export default Searchbarunsend









































import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
// import "./styles.css";
// import AngryJoe from './components/AngryJoe';
// import * as Cards from './components/cards';


class App extends Component {
  


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
    this.handleUnsend = this.handleUnsend.bind(this)
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

      handleUnsend(){
     
        fetch("http://localhost:9002/user/remove/request/"+(JSON.parse(localStorage.getItem('email')))+"/"+(this.state.selectedFreq), 
       {
           method: 'GET',
           headers: { 
           "Content-Type": "application/json",
           "Authorization" :JSON.parse(localStorage.getItem('token')) 
       } 
       }).then(alert('Successfully unsent'))
       .then(console.log(this.state.selectedFreq))
      }






  render(){
    return (
      <Fragment>
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
        <label style={{fontSize:"30px"}}>Unsend previously sent friend requests</label>
        <select className="card-selector form-control"
          onChange={(e) => this.setState({ selectedFreq: e.target.value })}>
          <option></option>
          {this.state.pendingRequests.map((freq)=> <option>{freq}</option>)}
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
        <button onClick={this.handleUnsend}>Unsend</button>
        </div>  
       )


    // const Card = Cards[selectedCardType];

    // return <Card />;
  }
}
export default App

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
