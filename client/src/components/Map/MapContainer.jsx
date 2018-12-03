import React from 'react';
import {
    GoogleApiWrapper,
    Map,
    Marker
} from 'google-maps-react';
import MarkerMaker from './MarkerAdd';
import axios from 'axios';
import CommentWindow from '../Comments/CommentWindow.jsx';
import './mapContainer.css';
import mapStyles from './mapstyles.js';


export class MapContainer extends React.Component {

    
    state = {
        currentLocation: {
            lat: '',
            lng: ''
        },
        newMarker: {
            image: '',
            religion: ''
        },
        markers: [],
        markerAdded: false,
        show: false,
        bulletinID: '',
        user: ''

    };
    

    // saves image data for clicked marker to state for later api request
    onMarkerClicked = (marker) => {
        console.log("Changing parent state", marker);
        this.setState({
            newMarker: { ...marker }
        })
    }
    // api request sends marker added data to database for later location population
    onMarkerAdd = () => {
        axios.post('/api/addMarker', {
            params: this.state
        })

            .then(response => {
                console.log("Marker added", response);
                this.setState({
                    markerAdded: !this.state.markerAdded,
                    markers: [...this.state.markers, response.data]
                })
            })
            .catch(error => {
                console.log(error.response);
            });
    };

    // when a marker on the map is clicked, it pulls up the comment window
    onBulletinClick = (props, marker, e) => {
        this.setState({
            bulletinID: marker.title
        });
        this.modalDisplay();
    };

    modalDisplay = () => {
        this.setState({
            show: !this.state.show
        });
    };

    signOutClick = () => {
        this.props.signOut();
    }

    // centers google map, then makes api call for markers to populate map
    componentDidMount() {
        // center the map on user's current location
        if (navigator && navigator.geolocation) {
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

        // populate map with markers saved in database
        axios.get('/api/loadMarkers')
            .then(response => {
                let locationMarkers = response.data;
                console.log(locationMarkers);
                let updatedMarkersArray = [...this.state.markers];
                locationMarkers.forEach(location => {
                    updatedMarkersArray.push(location);

                })

                this.setState({
                    markers: updatedMarkersArray,
                });
            });
    };


    render() {
        // const mapStyles =  [{"featureType": "all","elementType": "labels.text","stylers": [{"visibility": "on"}]},{"featureType": "all","elementType": "labels.text.fill","stylers": [{"color": "#ffffff"},{"visibility": "on"}]},{"featureType": "all","elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#413c48"},{"weight": "3.40"}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#6f38c7"},{"lightness": 20}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#392855"},{"lightness": 17},{"weight": 1.2}]},{"featureType": "administrative.neighborhood","elementType": "all","stylers": [{"visibility": "on"}]},{"featureType": "administrative.land_parcel","elementType": "all","stylers": [{"visibility": "on"},{"color": "#524070"}]},{"featureType": "administrative.land_parcel","elementType": "geometry","stylers": [{"visibility": "on"},{"color": "#6c3db8"}]},{"featureType": "landscape","elementType": "geometry","stylers": [{"lightness": "25"},{"visibility": "on"},{"color": "#b1a0cb"}]},{"featureType": "landscape.man_made","elementType": "all", "stylers": [{"visibility": "on"},{"color": "#8970b1"}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#47385f"},{"lightness": 21}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#d6bcff"},{"lightness": 17}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#000000"},{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#522697"},{"lightness": 16}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#af96d9"},{"lightness": 19}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#271a3b"},{"lightness": 17}]},{"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#0f071b"}]}];
        const { google } = this.props;
        return (
            <div className="container-fluid mapContainer">
                        <CommentWindow
                            {...this.state}
                            user={this.props.user}
                            show={this.state.show}
                            onHide={this.modalDisplay}
                            onClick={this.modalDisplay} />
                        <div className="row">
                            <MarkerMaker
                                onMarkerAdd={this.onMarkerAdd}
                                onMarkerClicked={this.onMarkerClicked}
                            />
                        </div>
                        <div className="row" id='main'>
                            <Map
                                google={this.props.google}
                                style={style}
                                styles={mapStyles}
                                initialCenter={{ lat: 38.8597, lng: -104.9172 }}
                                center={this.state.currentLocation}
                                zoom={16}
                                mapType="night"
                            >
                                {this.state.markers.map(marker => (
                                    <Marker
                                        key={marker._id + "id"}
                                        title={marker._id}
                                        name={marker.religion}
                                        position={{ lat: marker.latitude, lng: marker.longitude }}
                                        icon={{
                                            url: marker.image,
                                            scaledSize: new google.maps.Size(40, 40)
                                        }}
                                        onClick={this.onBulletinClick}
                                    />
                                ))}

                            </Map>
                </div>
            </div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBbydTLb3PaAjuuvOq-VbIZkrdHy_7ZYi0'
})(MapContainer)


const style = {
    width: '80%',
    height: '80%',
    margin: 'auto',
    position: "relative",
    backgroundColor: "#d84315",
    border: "10px solid #A53310 "
}