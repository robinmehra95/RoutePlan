/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import {withGoogleMap, GoogleMap, Marker, } from 'react-google-maps';
import './style.css';
import CaltexIcon from "./../../img/icon-caltex-circle.png";

class SmallMapComp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const that = this;
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{lat: 1.32677, lng: 103.807}}
                defaultZoom={12}  >                  
                    <Marker
                        icon={CaltexIcon} 
                        position={{ lat: 1.32677, lng: 103.807 }}
                        >
                    </Marker>
            </GoogleMap>
        ));

        return (
            <div className="smallmap">
                <GoogleMapExample
                    containerElement={<div 
                    style={{height: `450px`, width: '451px'}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                    >                    
                 </GoogleMapExample>
            </div>
        );
    }
}



export default SmallMapComp;