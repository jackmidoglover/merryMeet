import React from 'react';
import Axios from 'axios';

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
            <div className="mt-5">
                <form encType="multipart/form-data" onSubmit={this.pictureUpload}>
                    <input type="file" name="avatar" className="form-control" ref={this.fileInput} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
};

export default PictureUpload;