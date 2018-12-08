import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import CustomNavbar from './components/CustomNavbar'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path='/' component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
