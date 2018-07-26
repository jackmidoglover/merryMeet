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

    onBulletinReceived = (id) => {
        this.setState({
            bulletinid: id
        });
        console.log(this.state);
    };

    componentDidUpdate(prevProps, prevState, snapshot){
        if (this.props.bulletinID !== prevProps.bulletinID){
            
            this.setState({
                bulletinid: this.props.bulletinID
            });

            // this.onBulletinReceived(this.props.bulletinID);


            
        };
        if (this.state.bulletinid !== prevState.bulletinid){

            axios.get('/api/bulletinboard', {
                params: {
                    bulletin: this.state.bulletinid
                    }
                })
            .then(response => {
                let comments = response.data;
                console.log(comments);
                let updatedCommentArray = [...this.state.locationComments];
                comments.forEach(comment =>{
                    updatedCommentArray.push(comment);
                });

                this.setState({locationComments: updatedCommentArray});
                console.log("new state?", this.state);
            });


        };

    };

  componentDidMount(){
      console.log("something", this.state);

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
                    <form className="addComment text-center" onSubmit={this.onSubmit}>
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