import React from 'react';
import axios from 'axios';

export class MarkerMaker extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
            imgUrl: '',
            religion: ''
        };
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onAddMarker = this.onAddMarker.bind(this);
    };

    onMarkerClick = (event) => {
        console.log("marker clicked");
        this.props.onMarkerClicked({
            imgUrl: event.target.src,
            religion: event.target.className,
        });
    };

    onAddMarker(event){
        this.props.onMarkerAdd(this.state);
    };

    render(){
        return(
            <div className="col-md-6 offset-md-3 text-center">
                <img src="/assets/images/celtic.png" className="Celtic" onClick={this.onMarkerClick} />
                <img src="/assets/images/egypt.png" className="Egyptian" onClick={this.onMarkerClick} />
                <img src="/assets/images/grecoRoman.png" className="Greco-Roman" onClick={this.onMarkerClick} />
                <img src="/assets/images/heathen.png" className="Heathen/Germanic" onClick={this.onMarkerClick} />
                <img src="/assets/images/wicca.png" className="Wiccan" onClick={this.onMarkerClick} />

                <div className="row">
                    <div className="col-md-4 offset-md-4 text-center">
                    <button className="btn btn-primary" onClick={this.onAddMarker}> Add Marker </button>
                    </div>
                </div>
            </div>
        )
        }


};

export default MarkerMaker;