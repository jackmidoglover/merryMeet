import React from 'react';

export class UserWindow extends React.Component {
    componentDidMount(){

    }

    render(){
        return(
            <div className="col-md-4 mt-2" style={{backgroundColor: "#34144F"}}>
            <h1>Hello, {this.props.user.username}!</h1>
            <hr />
            <h2>Your Profile: </h2>
                
            </div>
        )
    }
};

export default UserWindow;