import React, { Component } from 'react';
import Authcard from './Authcard';


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '', 
            isAuthenticated: false
        }
    };

    componentDidMount(){
    };

    render(){
        return(
            <Authcard title="Log In">
                <div className="col-md-10 offset-md-1 login-input">
                    <div className="row">
                        <input type="text" name="username" placeholder="username" className="form-control" />
                    </div>
                    <div className="row">
                    </div>
                    <div className="row">
                        <input type="text" name="password" placeholder="password" className="form-control" />
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button method="post" action="/api/users" className="btn btn-primary">Log In </button> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button className="btn btn-secondary">New User? </button> 
                        </div>
                    </div>
                </div>
            </ Authcard>
            
        )
    }


}