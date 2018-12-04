import React from 'react';

export class PictureUpload extends React.Component {
    state = {
        userFile: ''
    }
    componentDidMount(){

    }

    render(){
        return (
            <div className="mt-5">
                <form encType="multipart/form-data">
                    <input type="file" name="avatar" className="form-control" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
};

export default PictureUpload;