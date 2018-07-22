import React from 'react';
import {GoogleApiWrapper,
    Map} from 'google-maps-react';

export class MapContainer extends React.Component{
 render(){
    return(
    <div className="map">
        <Map google={this.props.google} style={style} />
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