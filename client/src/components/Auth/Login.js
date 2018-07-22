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

    };

    componentDidMount(){
    };

    onSubmit(event){
        event.preventDefault();
        axios.get('http://localhost:3001/users/login', {
            params: this.state
        })
        .then(res => {
            console.log("login request sent", res.body);
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
                            <button className="btn btn-secondary">New User? </button> 
                        </div>
                    </div>
                </form>
            </ Authcard>
            
        )
    }


}