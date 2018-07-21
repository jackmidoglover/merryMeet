import React, { Component } from 'react';

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
            <div className="card authScreen">
                <div className="card-body">
                    <h3 className="card-title">
                        Log In
                    </h3>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                        <br />
                        <br />
                        <input type="text" className="form-control" placeholder="Password" aria-label="Username" />
                    </div>
                </div>

            </div>
        )
    }


}