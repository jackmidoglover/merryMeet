import React from 'react';
import PictureUpload from './PictureUpload';
import './userwindow.css';

export class UserWindow extends React.Component {
    state ={
        user: {},
        profileUpload: false,
        defaultImage: "/assets/images/blaccatt.jpg"
    }
    componentDidMount(){

    }
    componentWillReceiveProps(nextProps){
            this.setState({
                user: nextProps.user
            })
            this.props.loadInfo;
            console.log("UserWindow state", this.state.user.image);
        
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
            <div className="row">
                <div className="col-md-6">
                    <h2>Your Profile: </h2>
                    <p>Username: {this.state.user.username}</p>
                    <p>Religion: {this.state.user.religion}</p>
                    <p>Zipcode: {this.state.user.zipcode}</p>
                    <p>Biography: {this.state.user.bio}</p>
                </div>
                <div className="col-md-6 text-right">
                {this.state.user.image ? 
                <img src={this.props.user.image.imageUrl} className="img-circle userProfile" /> 
                :
                <img src={this.state.defaultImage} className="img-circle userProfile" /> }
                </div>
                </div>
                <button className="btn btn-primary" onClick={this.profileUploadClick}>Add a Profile Picture!</button>
                {this.state.profileUpload ? <PictureUpload userInfo={this.state.user} picUpload={this.props.loadInfo} /> : null}
            </div>
        )
    }
};

export default UserWindow;