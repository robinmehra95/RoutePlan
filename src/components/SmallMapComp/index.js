/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import {withGoogleMap, GoogleMap, Marker, } from 'react-google-maps';
import './style.css';
import CaltexIcon from "./../../img/marker_icon.png";

class SmallMapComp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const that = this;
        const { info, zoom } = this.props;
        const zoomvalue = zoom ? zoom : 12;
        const latitude = info && parseFloat(info.latitude , 10);
        const longitude = info && parseFloat(info.longitude , 10) ;
        const latitudeFinal = latitude ? latitude : 1.32677;
        const longitudeFinal = longitude ? longitude : 103.807;
        

        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{lat: latitudeFinal ,lng: longitudeFinal}}
                defaultZoom={zoomvalue}  >                  
                    <Marker
                        icon={CaltexIcon} 
                        position={{lat: latitudeFinal ,lng: longitudeFinal}}
                        >
                    </Marker>
            </GoogleMap>
        ));

        return (
            <div className="smallmap">
                <GoogleMapExample
                    containerElement={<div 
                    style={{height: this.props.height ? this.props.height : '450px', width: this.props.width ? this.props.width  : '451px'}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                    >                    
                 </GoogleMapExample>
            </div>
        );
    }
}



export default SmallMapComp;