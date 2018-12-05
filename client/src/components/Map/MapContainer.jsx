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
import UserWindow from './UserInfo/UserWindow';



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
            console.log("current user", this.props.user);

            
    };


    render() {
        const { google } = this.props;
        return (
            <div className="container-fluid mt-5" style={{position: "relative"}}>
                        <CommentWindow
                            {...this.state}
                            user={this.props.user}
                            show={this.state.show}
                            onHide={this.modalDisplay}
                            onClick={this.modalDisplay} />
                        <div className="row mt-5">
                            <UserWindow user={this.props.user} loadInfo={this.props.loadUser} />
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
    apiKey: process.env.REACT_APP_GOOGLE_KEY,
})(MapContainer)


const style = {
    width: '65%',
    height: '500%',
    marginLeft: 'auto',
    marginBottom: "20px",
    position: "relative",
    backgroundColor: "#311b92",
    border: "10px solid #012154"
}