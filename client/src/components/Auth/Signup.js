import React, { Component } from 'react';
import Authcard from './Authcard';
import axios from 'axios';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            religion:'',
            zipcode:'',
            bio: '', 
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onReligionChange = this.onReligionChange.bind(this);
        this.onZipcodeChange = this.onZipcodeChange.bind(this);
        this.onBioChange = this.onBioChange.bind(this);
    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        let user = this.state;
        axios.post('/api/users/signup'
        , {user})
        .then(response => {
            console.log("sign up request sent", response);
            this.props.onSignUp(response.data.user);
        })
        // .catch(function(err){console.log(err)});
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

    onReligionChange(event){
        this.setState({
            religion: event.target.value
        });
    };

    onZipcodeChange(event){
        this.setState({
            zipcode: event.target.value
        });
    };

    onBioChange(event){
        this.setState({
            bio: event.target.value
        });
    };

    

    componentDidMount(){
    };

    render(){
        return(
            <Authcard title="Sign Up">
                <form className="col-md-10 offset-md-1 login-input" onSubmit={this.onSubmit}>
                    <div className="row">
                        <input type="text" name="username" placeholder="username" className="form-control" onChange={this.onUsernameChange} />
                    </div>
                    <div className="row">
                        <input type="text" name="password" placeholder="password" className="form-control" onChange={this.onPasswordChange} />
                    </div>
                    <div className="row">
                        <input type="text" name="religion" placeholder="religion" className="form-control" onChange={this.onReligionChange} />
                    </div>
                    <div className="row">
                        <input type="number" name="zipcode" placeholder="Zipcode" className="form-control" onChange={this.onZipcodeChange} />
                    </div>
                    <div className="row">
                        <textarea name="bio" placeholder="Short Biography" className="form-control" onChange={this.onBioChange} />
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <input type="submit" className="btn btn-primary" value="Sign Up!" /> 
                        </div>
                    </div>
                </form>
            </ Authcard>
            
        )
    }


}