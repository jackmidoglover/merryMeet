import React from 'react';
import './navbar.css';

const Navbar = props => {
    const signOutClick = () => {
        this.props.signOut();
    }
        return (
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            {!!props.logIn ? (<a className="nav-link authButtons" href="#">Sign Out</a>)
                            : (<a className="nav-link authButtons" href="#">Sign In</a>)}
                        </li>
                    </ul>
                </div>
            </nav>
        )
}

export default Navbar;