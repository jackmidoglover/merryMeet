import React from 'react'; 
import {Modal, Button} from 'react-bootstrap'
import ReactDOM from 'react';
import axios from 'axios';

export class CommentWindow extends React.Component {
    state = {
        bulletinid: '',
        text: '',
        locationComments: [],
    }

    onSubmit = (event) => {
            event.preventDefault();
            console.log(this.props.bulletinid);
            let userid= this.props.user._id;
            let userImg = this.props.user.imageUrl;
            axios.post('/api/addComment', {
                user: userid,
                userImage: userImg,
                bulletin: this.state.bulletinid,
                text: this.state.text
            })
            .then(response => {
                console.log(response);
            });
    };

    onCommentChange =(event) => {
        this.setState({
            text: event.target.value
        });
    };

    componentWillReceiveProps(nextProps){
        if (this.state.bulletinid !== nextProps.bulletinID){
            this.setState({
                bulletinid: nextProps.bulletinID
            });
            axios.get('/api/bulletinboard', {
                params: {
                    bulletin: this.state.bulletinID
                    }
                })
            .then(response => {
                console.log(response);
            });
        };
    };

  componentDidMount(){
      console.log("grand child user object",this.props.user.username);
      console.log("child bulletin id", this.props.bulletinid);

  };

    render(){
    return (
        <div>
            <Modal  
                show={this.props.show}
                onHide={this.props.onHide} 
                onClick={this.props.onClick}
            >
                <Modal.Header>
                    <h3> Comments </h3> 
                </Modal.Header>
                <Modal.Body>
                    <div className="showComments"> 
                    Comments shown here
                    </div>
                    <hr />
                    <form className="addComment" onSubmit={this.onSubmit}>
                    <h4>Add a Comment</h4>
                    <hr />
                    <textarea className="form-control" defaultValue="add comment here" onChange={this.onCommentChange}/>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onClick}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
        );
    };
};
export default CommentWindow;