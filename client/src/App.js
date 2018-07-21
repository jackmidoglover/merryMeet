import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import './App.css';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
          <Login />
    );
  }
};



export default App;
