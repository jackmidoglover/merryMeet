import React from 'react';

export class UserWindow extends React.Component {
    componentDidMount(){

    }

    render(){
        return(
            <div className="col-md-4 mt-2" style={{backgroundColor: "#A43640", position: "absolute"}}>
            <h1>Hello, {this.props.user.username}!</h1>
            <hr />
            <h2>Your Profile: </h2>
                <p>Username: {this.props.user.username}</p>
                <p>Religion: {this.props.user.religion}</p>
                <p>Zipcode: {this.props.user.zipcode}</p>
                <p>Biography: {this.props.user.bio}</p>
            </div>
        )
    }
};

export default UserWindow;