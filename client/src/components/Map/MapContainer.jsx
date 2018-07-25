import React from 'react';
import {
    GoogleApiWrapper,
    Map,
    Marker
} from 'google-maps-react';
import MarkerMaker from './MarkerAdd';
import axios from 'axios';



export class MapContainer extends React.Component {

    state = {
        currentLocation: {
            lat: '',
            lng: ''
        },
        newMarker: {
            imgUrl: '',
            religion: ''
        },
        markers: [],
        markerAdded: false
    };

    onMarkerClicked = (marker) => {
        console.log("Changing parent state", marker);
        this.setState({
            newMarker: { ...marker }
        })
    }

    onMarkerAdd = (marker) => {

        console.log("add marker click");
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
            })
    }

    componentDidMount() {
        // center the map on user's current location
        console.log("map center");
        if (navigator && navigator.geolocation) {
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

        axios.get('/api/loadMarkers')
            .then(response => {
                let locationMarkers = response.data;
                let updatedMarkersArray = [...this.state.markers];
                locationMarkers.forEach(location => {
                    updatedMarkersArray.push(location);

                })

                this.setState({
                    markers: updatedMarkersArray,
                });
                // console.log("marker get request sent", this.state.markers[0].image);
            });

    };


    render() {
        const { google } = this.props;
        return (
            <div className="container-fluid">
                <div className="row">
                    <MarkerMaker
                        onMarkerAdd={this.onMarkerAdd}
                        onMarkerClicked={this.onMarkerClicked}
                    />
                </div>
                <div className="row">
                    <Map
                        google={this.props.google}
                        style={style}
                        initialCenter={{ lat: 38.8597, lng: -104.9172 }}
                        center={this.state.currentLocation}
                        zoom={16}
                    >
                        {this.state.markers.map(marker => (
                            <Marker
                                key={marker._id}
                                title={marker.religion}
                                name={marker.religion}
                                position={{ lat: marker.latitude, lng: marker.longitude }}
                                icon={{
                                    url: marker.image,
                                    scaledSize: new google.maps.Size(40, 40)
                                }} />
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
    margin: 'auto'
}