import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import './App.css';
import Login from './components/Auth/Login';
import MapContainer from './components/Map/MapContainer';
import Wrapper from './components/Wrapper';
import Signup from './components/Auth/Signup';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      newUser: false,
      loggedInUser: null
    };

    this.onLoggedIn = this.onLoggedIn.bind(this);
    this.signUpClick = this.signUpClick.bind(this);
  }

  signUpClick(){
    this.setState({
      newUser: true
    })
  };

  onLoggedIn(user){
    this.setState({
      loggedInUser: user
    })

  }
 
  render() {
    return (
      <Wrapper>
        {
          !!this.state.loggedInUser ? (
            <MapContainer />
          ) :
          this.state.newUser ? (
            <Signup />
          ) : (
            <Login
              onLoggedIn={this.onLoggedIn}
            />
          )
        }
      </Wrapper>
    );
  }
};

// Create authentication flow 
  // How to use router-dom to route and make an api request w/same button?
  // Does the authentication and async storage go in App.js where login/sign up components will be loaded or in those components

export default App;
