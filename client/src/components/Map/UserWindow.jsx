import React from 'react';

export class UserWindow extends React.Component {
    state ={
        user: {}
    }
    componentDidMount(){

    }
    componentWillReceiveProps(nextProps){

            this.setState({
                user: nextProps.user
            })
        
    }

    render(){
        return(
            <div className="col-md-4 mt-2" style={{backgroundColor: "#A43640", position: "absolute"}}>
            <h1>Hello, {this.state.user.username}!</h1>
            <hr />
            <h2>Your Profile: </h2>
                <p>Username: {this.state.user.username}</p>
                <p>Religion: {this.state.user.religion}</p>
                <p>Zipcode: {this.state.user.zipcode}</p>
                <p>Biography: {this.state.user.bio}</p>
            </div>
        )
    }
};

export default UserWindow;