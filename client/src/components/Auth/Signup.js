import React, { Component } from 'react';
import Authcard from './Authcard';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            religion: '',
            zipcode: '',
            bio: '',
            signUpError: null,
            signUpErrorMsg: null
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.signIn = this.signIn.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onReligionChange = this.onReligionChange.bind(this);
        this.onZipcodeChange = this.onZipcodeChange.bind(this);
        this.onBioChange = this.onBioChange.bind(this);
    };

    onSubmit = (event) => {
        event.preventDefault();
        let user = this.state;
        axios.post('/api/users/signup'
            , { user })
            .then(response => {
                console.log("Response status", response.data);
                console.log("sign up request sent", response);
                this.props.onSignUp(response.data.user);
            })
        .catch(err => {
            if (err.response){
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers)
            }
            if (err.response.status === 409) {
                let errorType = err.response.data.type;
                let errorMsg = err.response.data.message;
                this.setState({
                    signUpError: errorType,
                    signUpErrorMsg: errorMsg
                });
                console.log(this.state.signUpError);
            }
        });
    };

    signIn(){
        this.props.signInClick();
    }
    onUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    };

    onPasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    };

    onReligionChange(event) {
        this.setState({
            religion: event.target.value
        });
    };

    onZipcodeChange(event) {
        this.setState({
            zipcode: event.target.value
        });
    };

    onBioChange(event) {
        this.setState({
            bio: event.target.value
        });
    };



    componentDidMount() {
    };

    render() {
        return (
            <Authcard title="Sign Up">
                <form className="col-md-10 offset-md-1 login-input" onSubmit={this.onSubmit}>
                    <div className="row mb-2">
                        <label htmlFor="username" className="col-md-3 text-right">Username:</label>
                        <div className="col-md-9">
                            <input type="text" name="username" placeholder="username" className="form-control" onChange={this.onUsernameChange} />
                            {this.state.signUpError === "username" ? 
                                <div class="alert alert-warning" role="alert">
                                    {this.state.signUpErrorMsg}
                                </div>
                            :
                                null
                            }
                        </div>
                    </div>
                    <div className="row mb-2">
                        <label htmlFor="password" className="col-md-3 text-right">Password:</label>
                        <div className="col-md-9">
                            <input type="text" name="password" placeholder="password" className="form-control" onChange={this.onPasswordChange} />
                            {this.state.signUpError === "password" ? 
                                <div class="alert alert-danger" role="alert">
                                    Your password must be atleast 6 characters long and no longer than 15 characters.
                                </div>
                            :
                                null
                            }
                        </div>
                    </div>
                    <div className="row mb-2">
                        <label htmlFor="religion" className="col-md-3 text-right">Religion:</label>
                        <div className="col-md-9">
                            <input type="text" name="religion" placeholder="religion" className="form-control" onChange={this.onReligionChange} />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <label htmlFor="zipcode" className="col-md-3 text-right">Zipcode:</label>
                        <div className="col-md-9">
                            <input type="number" name="zipcode" placeholder="Zipcode" className="form-control" onChange={this.onZipcodeChange} />
                        </div>
                    </div>
                    <div className="row mb-2" className="text-center">
                        <label htmlFor="bio">Tell us About Yourself:</label>
                            <textarea name="bio" placeholder="Short Biography" className="form-control" onChange={this.onBioChange} />
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-12 text-center">
                            <input type="submit" className="btn btn-primary mt-2" value="Sign Up!" />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-8 offset-md-2 text-center">
                        Already have an account? <a href="#" onClick={this.signIn}>Sign in!</a>
                        </div>
                    </div>
                </form>
            </ Authcard>

        )
    }


}