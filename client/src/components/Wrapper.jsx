import React from 'react';

const Wrapper = props => {
    return(
        <div className="container-fluid">
        <header className="header text-center"> <h1> Merry Meet </h1> </header>
            <div className="row">
            {props.children}
            </div>
        </div>
    )
}

export default Wrapper;