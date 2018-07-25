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
      newUser: false,
      loggedInUser: null
    };

    this.onLoggedIn = this.onLoggedIn.bind(this);
    this.signUpClick = this.signUpClick.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  signUpClick(){
    this.setState({
      newUser: true
    });
  };

  onLoggedIn(user, isMatch){
    this.setState({
      loggedInUser: user,
    });
  };

  onSignUp(user){
    this.setState({
      loggedInUser: user
    });
  };
 
  render() {
    return (
      <Wrapper>
        {
          !!this.state.loggedInUser ? (
            <MapContainer />
          ) :
          this.state.newUser ? (
            <Signup
            onSignUp={this.onSignUp}
            />
          ) : (
            <Login
              onLoggedIn={this.onLoggedIn}
              signUpClick={this.signUpClick}
            />
          )
        }
      </Wrapper>
    );
  }
};

// cookie for log in
// check for cookie when logged in -set week expiry time on cookie
// with error messages 

export default App;
