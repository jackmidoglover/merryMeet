import React from 'react';
import './navbar.css';

export class Navbar extends React.Component {

    state = {
        session: this.props.session,
        loggedInUser: this.props.logIn, 
    }
    componentWillReceiveProps(nextProps){
        // if (this.props.logIn !== nextProps.logIn && this.props.session !== nextProps.session){
        this.setState({
            session: nextProps.session,
            loggedInUser: nextProps.logIn
        })
    // }
    }
    signOutClick = () => {
        console.log("Navbar state", this.state);
        this.props.signOut();
    }
    render(){
        return (
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            {!!this.state.loggedInUser || !!this.state.session ? (<a className="nav-link authButtons" href="#" onClick={this.signOutClick}>Sign Out</a>)
                            : null}
                        </li>
                    </ul>
                </div>
            </nav>
        )
}
}

export default Navbar;