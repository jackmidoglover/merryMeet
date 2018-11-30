import React from 'react';
import './wrapper.css';

const Wrapper = props => {
    return(
        <div className="container-fluid">
        <header className="header text-center"> <h1 class="logo"> Merry Meet </h1> </header>
            {props.children}
        </div>
    )
}

export default Wrapper;