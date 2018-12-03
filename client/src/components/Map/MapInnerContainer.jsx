import React from 'react';

const LoadingContainer = (props) => (
    <div className="mapContainer col-md-8 offset-md-4">{props.children}</div>
);

export default LoadingContainer;