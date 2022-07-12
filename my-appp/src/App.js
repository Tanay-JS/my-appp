import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Dashbord from './Components/Dashbord';
import Searchbar from './Components/Searchbar';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App" >
      <Home />
      </div>   
  );
}

export default App;
