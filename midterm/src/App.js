import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import React, { Component } from 'react';
import Students from './components/Students';

class App extends Component {
  render() {
    return (
      // <Router>
      //   <div className="App">
      //     <ul>
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li>
      //         <Link to="/about">About Us</Link>
      //       </li>
      //       <li>
      //         <Link to="/contact">Contact Us</Link>
      //       </li>
      //     </ul>
      //     <Routes>
      //       <Route exact path='/' element={< Home />}></Route>
      //       <Route exact path='/about' element={< About />}></Route>
      //       <Route exact path='/contact' element={< Contact />}></Route>
      //     </Routes>
      //   </div>
      // </Router>
      <div className="App">
        <Students/>
      </div>
    );
  }
}

export default App;
