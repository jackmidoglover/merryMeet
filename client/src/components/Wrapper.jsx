import React from 'react';

const Wrapper = props => {
    return(
        <div className="container-fluid">
        <header className="header text-center"> <h1> Merry Meet </h1> </header>
            {props.children}
        </div>
    )
}

export default Wrapper;