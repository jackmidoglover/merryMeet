import React from 'react';
import './mapContainer.css';

export class MarkerMaker extends React.Component{

    onMarkerClick = (event) => {
        console.log("marker clicked");
        this.props.onMarkerClicked({
            image: event.target.src,
            religion: event.target.className,
        });
    };

    render(){
        return(
            <div className="text-center mapContainer" style={{width: "82%", margin: "auto"}}>
                <img src="/assets/images/celtic.png" className="Celtic" onClick={this.onMarkerClick} />
                <img src="/assets/images/egypt.png" className="Egyptian" onClick={this.onMarkerClick} />
                <img src="/assets/images/grecoRoman.png" className="Greco-Roman" onClick={this.onMarkerClick} />
                <img src="/assets/images/heathen.png" className="Heathen/Germanic" onClick={this.onMarkerClick} />
                <img src="/assets/images/wicca.png" className="Wiccan" onClick={this.onMarkerClick} />

                <div className="row">
                    <div className="col-md-4 offset-md-4 text-center">
                    <button className="btn btn-primary" onClick={this.props.onMarkerAdd}> Add Marker </button>
                    </div>
                </div>
            </div>
        )
        }


};

export default MarkerMaker;