import React, { Component } from 'react';
import Authcard from './Authcard';
import axios from 'axios';


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '', 
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onNewUserClick = this.onNewUserClick.bind(this);

    };

    componentDidMount(){
    };

    onSubmit(event){
        event.preventDefault();
        axios.get('/api/users/login', {
            params: this.state
        })
        .then((res) => {
            console.log("login request sent", res.data);
            if(res.data.success === true){
                this.props.onLoggedIn(res.data.user);
            }
            
        });
    };

    onUsernameChange(event){
        this.setState({
            username: event.target.value
        });
    };

    onPasswordChange(event){
        this.setState({
            password: event.target.value
        });
    };

    onNewUserClick(){
        this.props.signUpClick();
    }

    render(){
        return(
            <Authcard title="Log In">
                <form className="col-md-10 offset-md-1 login-input" onSubmit={this.onSubmit}>
                    <div className="row">
                        <input type="text" name="username" placeholder="username" className="form-control" onChange={this.onUsernameChange} />
                    </div>
                    <div className="row">
                    </div>
                    <div className="row">
                        <input type="text" name="password" placeholder="password" className="form-control" onChange={this.onPasswordChange} />
                    </div> 
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <input type="submit" className="btn btn-primary" value="Submit" /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button className="btn btn-secondary" onClick={this.onNewUserClick}>New User? </button> 
                        </div>
                    </div>
                </form>
            </ Authcard>
            
        )
    }


}