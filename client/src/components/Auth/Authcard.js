import React from 'react';


const Authcard = props => {
return (
<div className="card authScreen col-md-4 offset-md-4">
    <div className="card-body row">
        <div className="title col-md-6 offset-md-3">
            <h3 className="card-title text-center">
                {props.title}
            </h3>
        </div>
        </div>
            <div className="login-group row">
                {props.children}
                
            </div>
        </div>

)

}

export default Authcard;
