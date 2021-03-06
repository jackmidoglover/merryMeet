import React from 'react';
import Axios from 'axios';
import './userwindow.css';

export class PictureUpload extends React.Component {
    constructor(props){
        super(props);
        this.pictureUpload = this.pictureUpload.bind(this);
        this.fileInput = React.createRef();
    }
    state = {
        userFile: ''
    }
    componentDidMount(){

    }

    pictureUpload = (event) => {
        event.preventDefault();
        let image = this.fileInput.current.files[0];
        let formData = new FormData();
        formData.append("image", image);
        Axios.post('/api/users/'+ this.props.userInfo._id + '/images', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res)
            this.props.picUpload();
        })
    }

    render(){
        return (
            <div className="my-3 text-center addForm p-2">
                <form encType="multipart/form-data" onSubmit={this.pictureUpload}>
                <h4 className="mb-2">Choose a file below!</h4>
                <hr />
                    <input type="file" name="avatar" className="form-control-file mx-4" ref={this.fileInput} />
                    <input type="submit" className="btn addPhoto" />
                </form>
            </div>
        )
    }
};

export default PictureUpload;