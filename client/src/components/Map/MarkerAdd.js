import React from 'react';
import './mapContainer.css';

export class MarkerMaker extends React.Component{

    onMarkerClick = (event) => {
        console.log("marker clicked");
        this.props.onMarkerClicked({
            image: event.target.src,
            religion: event.target.id,
        });
    };

    render(){
        return(
            <div className="text-center mapContainer mt-2" style={{width: "82%", margin: "auto", padding: "10px"}}>
                <img src="/assets/images/celtic.png" className="marker" id="Celtic" onClick={this.onMarkerClick} />
                <img src="/assets/images/egypt.png" className="marker" id="Egyptian" onClick={this.onMarkerClick} />
                <img src="/assets/images/grecoRoman.png" id="Greco-Roman" className="marker" onClick={this.onMarkerClick} />
                <img src="/assets/images/heathen.png" id="Heathen/Germanic" className="marker" onClick={this.onMarkerClick} />
                <img src="/assets/images/wicca.png" id="Wiccan" className="marker" onClick={this.onMarkerClick} />

                <button className="btn addBtn ml-5" onClick={this.props.onMarkerAdd}> Add Marker </button>

            </div>
        )
        }


};

export default MarkerMaker;