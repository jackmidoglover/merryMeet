import React from 'react'; 

export class CommentWindow extends React.Component {
    state = {
        bulletin: '',
        text: '',
        user: '',
        userImage: '',
        locationComments: []
    }

    addCommentHandler(comment){
        // what happens on submit
    }


    render(){
        return (
        <div className="modal fade" id="addComment" tabindex ="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title"> Comments </h3>
                        <button type="buttn" className="close" data-dismisse="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="locationComments">
                        {/* comment text component */}
                        </div>
                    <form className="addComment" onSubmit={this.addCommentHandler}>

                            <textarea className="form-control" name="commentText" value="Type your comment here"></textarea>
                            <input type="submit" classNamename="btn btn-primary" value="Submit" />
                    </form>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismisse="modal"> Close </button>
                        </div>
                    </div>
                </div>
            </div>
    )
};