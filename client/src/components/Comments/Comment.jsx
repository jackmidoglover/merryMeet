import React from 'react';

const CommentBox = props => {
    return (
        <div className="row" style={{borderBottom: "dotted #E8D0DE 2px"}}>
            <div className="col-md-4 userInfo" style={{borderRight: "dotted #E8D0DE 2px"}}>
                <div className="row">
                    <div className="col-md-12">
                        <span className="text-center">
                            <h4 className="text-center">
                                <strong> {props.username} </strong>
                            </h4>
                        </span>
                    </div>
                </div>
                <div className="row">
                    <img src={props.userImage} alt={props.username} className="img img-circle mb-3" style={{ width: "100px", height: "100px", margin: "auto" }} />
                </div>
            </div>
            <div className="col-md-8 commentInfo">
                <p className="mt-4"> {props.text} </p>
            </div>
            <hr />
        </div>
    )
};

export default CommentBox;