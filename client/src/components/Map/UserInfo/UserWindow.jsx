import React from 'react';
import PictureUpload from './PictureUpload';
import './userwindow.css';

export class UserWindow extends React.Component {
    state = {
        user: {},
        profileUpload: false,
        defaultImage: "/assets/images/blaccatt.jpg"
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            user: nextProps.user
        })
        // this.props.loadInfo;
        console.log("UserWindow state", this.state.user.image);

    }

    profileUploadClick = () => {
        this.setState({
            profileUpload: !this.state.profileUpload
        })
    }

    render() {
        return (
            <div className="col-md-4 mt-2" style={{ backgroundColor: "#A43640", position: "absolute" }}>
                <h1>Hello, {this.state.user.username}!</h1>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <h2>Your Profile: </h2>
                        <p><strong>Username:</strong> {this.state.user.username}</p>
                        <p><strong>Religion:</strong> {this.state.user.religion}</p>
                        <p><strong>Zipcode:</strong> {this.state.user.zipcode}</p>
                        <p><strong>Biography:</strong> {this.state.user.bio}</p>
                    </div>
                    <div className="col-md-6 text-right">
                        {this.state.user.image ?
                            <img src={this.props.user.image.imageUrl} className="img-circle userProfile" />
                            :
                            <img src={this.state.defaultImage} className="img-circle userProfile" />}
                        <button className="btn addPhoto" onClick={this.profileUploadClick}>Add a Profile Picture!</button>
                    </div>
                </div>
                <div className="row text-center mb-3">
                        <div className="col-md-6 offset-md-6">
                            {this.state.profileUpload ? <PictureUpload userInfo={this.state.user} picUpload={this.props.loadInfo} /> : null}
                        </div>
                </div>
            </div>
        )
    }
};

export default UserWindow;