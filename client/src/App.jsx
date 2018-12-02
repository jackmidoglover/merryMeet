import React, { Component } from 'react';
import { instanceOf} from 'prop-types';
import { withCookies, Cookies} from 'react-cookie';
import './App.css';
import Login from './components/Auth/Login';
import MapContainer from './components/Map/MapContainer';
import Wrapper from './components/Wrapper';
import Signup from './components/Auth/Signup';

class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      newUser: false,
      loggedInUser: null,
      session: cookies.get("id")
    };

    this.onLoggedIn = this.onLoggedIn.bind(this);
    this.signUpClick = this.signUpClick.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.setCookie = this.setCookie.bind(this);
    this.signOut = this.signOut.bind(this);
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
    this.setCookie(user._id);
    console.log("on log in", user)
  };

  onSignUp(user){
    this.setState({
      loggedInUser: user
    });
    this.setCookie(user._id);
    console.log("on sign up", user);
  };

  setCookie(user){
    const { cookies } = this.props;
    cookies.set("id", user, { path: "/" });
    console.log(cookies.get("id"));
  };

  signOut(){
    console.log("sign out clicked", this.state.session);
    const { cookies } = this.props;
    this.setState({
      loggedInUser: '',
      session: cookies.remove("id", { path: "/" })
    })
    };

 
  render() {
    return (
      <Wrapper 
        logIn={this.state.loggedInUser} 
        signOut={this.signOut}
        session={this.state.session}>
        {
          !!this.state.loggedInUser || !!this.state.session ? (
            <MapContainer 
              user={this.state.loggedInUser}
              signOut={this.signOut} />
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

export default withCookies(App);
