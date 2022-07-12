import React from "react";
import './Home.css'
import {Link} from "react-router-dom"
import Navbar1 from "./Navbar1";
import Footer from "./Footer";
// import { Navbar } from "react-bootstrap";
// import Main from "./Main";
function Home() {
    return(
<>
<Navbar1 />


<div>
    
<h2 className="info">2PAYUBACK is a simple way to manage lending 
 between Friends and Family
 <br></br>
 In Three simple steps:</h2>

</div>
<div className="row">
    <div className="column">
    <img src="https://cdn.dribbble.com/users/2234430/screenshots/8587843/media/5a7b6b3be7edd17ae98a25d010277e62.gif" width={600}/>
    <h2>Login and Register</h2>
    </div>
    <div className="column">
    <img src="https://cdn.dribbble.com/users/189524/screenshots/7202003/media/f56ec5c320f89eb6f6a3dad9567da9cf.gif"width={600}/>
    <h2>Add Friends and transfer Money</h2>
    </div>
    <div className="column">
    <img src="https://i.pinimg.com/originals/e8/75/96/e8759658d95aa696adb9b1dd026d6653.gif" width={600}></img>
<h2>Get Payment Reminders via text and Email</h2>
</div>
</div>
<br></br>
<br></br>
<div style={{marginBottom:"2%"}}>
<button><Link to="/RegistrationForm">Register</Link></button>
<button><Link to="/Main">Login</Link></button>
</div>
<Footer />

 
</>
    );
}
export default Home;