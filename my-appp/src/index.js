import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Searchbar from './Components/Searchbar';
import Friends from './Components/Friends';
import Individual from './Components/Individual';
import Dashbord from './Components/Dashbord';
import Contact from './Components/Contact';
import Myprofile from "./Components/Myprofile"
// import Sendloan from './Components/Sendloan';
import Requestloan from './Components/Requestloan';
import RegistrationForm from './Components/Registrationform';
import Home from './Components/Home';
import Main from './Components/Main';
import Login from './Components/Login';
import Redirect from './Components/redirect/Redirect';
import FriendReq from './Components/FriendReq';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="Searchbar" element={<Searchbar />}/>
    <Route path="Friends" element={<Friends/>}/>
    <Route path="Individual" element={<Individual/>}/>
    <Route path="/Dashbord" element={<Dashbord/>}/>
    <Route path="Contact" element={<Contact/>}/>
    <Route path="MyProfile" element={<Myprofile />}/>
    {/* <Route path="Sendloan" element={<Sendloan />}/> */}
    <Route path="Requestloan" element={<Requestloan />}/>
    <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
    <Route path="/Home" element={<Home />}/>
    <Route path="/Main" element={<Main />}/>
    <Route path="/Redirect" element={<Redirect />}/>
    <Route path="/FriendReq" element={<FriendReq/>}/>

  </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
