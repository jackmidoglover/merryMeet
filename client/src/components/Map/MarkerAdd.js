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
            <div className="text-right mapContainer mt-2" style={{width: "65%", marginLeft: "auto", padding: "10px"}}>
                <img src="/assets/images/celtic.png" alt="Celtic Triskele" className="marker" id="Celtic" onClick={this.onMarkerClick} />
                <img src="/assets/images/egypt.png" alt="Eye of Horus" className="marker" id="Egyptian" onClick={this.onMarkerClick} />
                <img src="/assets/images/grecoRoman.png" alt="Laurel Crown" id="Greco-Roman" className="marker" onClick={this.onMarkerClick} />
                <img src="/assets/images/heathen.png" alt="Vulknacht" id="Heathen/Germanic" className="marker" onClick={this.onMarkerClick} />
                <img src="/assets/images/wicca.png" alt="Triple Moon" id="Wiccan" className="marker" onClick={this.onMarkerClick} />

                <button className="btn addBtn ml-5" onClick={this.props.onMarkerAdd}> Add Marker </button>

            </div>
        )
        }


};

export default MarkerMaker;