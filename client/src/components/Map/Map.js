import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';


export class Map extends React.Component{

    constructor(props){
        super(props);

        const {lat, lng} = this.props.initialCenter;
        this.state = {
            currentLocation: {
              lat: lat, 
            lng: lng  
            },   
        };
    };

    componentDidMount(){
        console.log("component mounted");
        if (navigator && navigator.geolocation){
            console.log("navigator exists");
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                });
            });
        };

        this.loadMap();
    };

    componentDidUpdate(prevProps, prevState) {
        console.log("component updated")
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation){
            this.reCenterMap();
        }
    };

    reCenterMap(){
        console.log("recenter map")
        const map = this.map;
        const curr = this.state.currentLocation;

        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(curr.lat, curr.lng);
            map.panTo(center);
        }
    };

    loadMap(){
        console.log("Loading map")
        if(this.props && this.props.google) {
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDom.findDOMNode(mapRef);

            let {initialCenter, zoom} = this.props;
            let {lat, lng} = this.state.currentLocation;
            
            const center = new maps.LatLng(lat, lng); 
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })

            this.map = new maps.Map(node, mapConfig);
        }
    }

    render(){
        return(
            <div ref="map"> 
                Loading map...
            </div>
        )
    }
};

Map.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object
};

Map.defaultProps = {
    zoom: 14, 
    initialCenter: {
        lat: 38.8597, 
        lng: 104.9172
    },
};
const style = {
    width: '80%',
    height: '80%', 
    margin: 'auto'
};
export default Map;