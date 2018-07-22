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
            <Authcard title="Sign Up">
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
                        <input type="text" name="religion" placeholder="religion" className="form-control" />
                    </div>
                    <div className="row">
                        <input type="number" name="zipcode" placeholder="Zipcode" className="form-control" />
                    </div>
                    <div className="row">
                        <textarea name="bio" placeholder="Short Biography" className="form-control" />
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button for="signup" className="btn btn-secondary">Sign Up </button> 
                        </div>
                    </div>
                </div>
            </ Authcard>
            
        )
    }


}