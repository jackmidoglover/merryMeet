// import React from 'react';
// import ReactDom from 'react-dom';
// import PropTypes from 'prop-types';



// export class Map extends React.Component{

//     constructor(props){
//         super(props);

//         const {lat, lng} = this.props.initialCenter;
//         this.state = {
//             currentLocation: {
//               lat: lat, 
//             lng: lng  
//             },   
//         };
//     };

//     componentDidMount(){
//         console.log("component mounted");
//         if (navigator && navigator.geolocation){
//             console.log("navigator exists");
//             navigator.geolocation.getCurrentPosition((pos) => {
//                 const coords = pos.coords;
//                 this.setState({
//                     currentLocation: {
//                         lat: coords.latitude,
//                         lng: coords.longitude
//                     }
//                 });
//             });
//         };

//         this.loadMap();
//     };

//     componentDidUpdate(prevProps, prevState) {
//         console.log("component updated")
//         if (prevProps.google !== this.props.google) {
//             this.loadMap();
//         }
//         if (prevState.currentLocation !== this.state.currentLocation){
//             this.reCenterMap();
//         }
//     };

//     reCenterMap(){
//         console.log("recenter map")
//         const map = this.map;
//         const curr = this.state.currentLocation;

//         const google = this.props.google;
//         const maps = google.maps;

//         if (map) {
//             let center = new maps.LatLng(curr.lat, curr.lng);
//             map.panTo(center);
//         }
//     };

//     loadMap(){
//         console.log("Loading map")
//         if(this.props && this.props.google) {
//             const {google} = this.props;
//             const maps = google.maps;

//             const mapRef = this.refs.map;
//             const node = ReactDom.findDOMNode(mapRef);

//             let {initialCenter, zoom} = this.props;
//             let {lat, lng} = this.state.currentLocation;
            
//             const center = new maps.LatLng(lat, lng); 
//             const mapConfig = Object.assign({}, {
//                 center: center,
//                 zoom: zoom
//             })

//             this.map = new maps.Map(node, mapConfig);
//         }
//     }

//     render(){
//         return(
//             <div ref="map" style={mapOptions}> 
//                 Loading map...
//             </div>
//         )
//     }
// };

// Map.propTypes = {
//     google: PropTypes.object,
//     zoom: PropTypes.number,
//     initialCenter: PropTypes.object
// };

// Map.defaultProps = {
//     zoom: 14, 
//     initialCenter: {
//         lat: 38.8597, 
//         lng: 104.9172
//     },
// };
// const style = {
//     width: '80%',
//     height: '80%', 
//     margin: 'auto',
//     position:"relative",
// };

// Map.defaultProps = {
//     // The style is copy from https://snazzymaps.com/style/2/midnight-commander
//     mapStyles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
//   }
// export default Map;