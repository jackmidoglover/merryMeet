import React from 'react';

const CommentBox = props => {
    return (
        <div className="row">
            <div className="col-md-3 userInfo">
                <div className="row">
                    <span className="text-center">
                        <h5>
                            <strong> {props.username} </strong>
                        </h5>
                    </span>
                </div>
                <div className="row">
                    <img src={props.userImage} alt={props.username} className="img img-circle" />
                </div>
            </div>
            <div className="col-md-9 commentInfo">
                <p> {props.text} </p>
            </div>
            <hr />
        </div>
    )
};

export default CommentBox;