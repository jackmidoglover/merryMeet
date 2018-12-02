import React from 'react';
import './wrapper.css';
import Navbar from './Navbar/Navbar';

const Wrapper = props => {
    return (
        <div className="container-fluid">
                <header className="header text-center">
                    <Navbar logIn={props.logIn} /> 
                    <h1 className="logo mt-5"> Merry Meet </h1> 
                </header>
                {props.children}
        </div>
            )
        }
        
export default Wrapper;