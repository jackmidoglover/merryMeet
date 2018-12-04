import React from 'react';
import PictureUpload from './PictureUpload';

export class UserWindow extends React.Component {
    state ={
        user: {},
        profileUpload: false,
    }
    componentDidMount(){

    }
    componentWillReceiveProps(nextProps){

            this.setState({
                user: nextProps.user
            })
        
    }

    profileUploadClick = () => {
        this.setState({
            profileUpload: !this.state.profileUpload
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

                <button className="btn btn-primary" onClick={this.profileUploadClick}>Add a Profile Picture!</button>
                {this.state.profileUpload ? <PictureUpload /> : null}
            </div>
        )
    }
};

export default UserWindow;