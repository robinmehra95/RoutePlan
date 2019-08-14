/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import {withGoogleMap, GoogleMap, DirectionsRenderer, Marker} from 'react-google-maps';
import './style.css';
import Stations from "../../stations";

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            directions: []
        }
    }

    componentDidMount() {
        // this.createDirections({lat: 1.32145, lng: 104.807}, {lat: 1.456789, lng: 103.107});
        // this.createDirections({lat: 1.45682, lng: 105.807}, {lat: 2.97856, lng: 103.207});
        // this.createDirections({lat: 1.32677, lng: 103.807}, {lat: 1.52112, lng: 108.097});
        this.createDirections({lat: 1.32677, lng: 103.807}, {lat: 1.32627, lng: 103.857});
        this.createDirections({lat: 1.32677, lng: 103.887}, {lat: 1.32627, lng: 103.807});
    }

    createDirections = (origin, destination) => {
        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: window.google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    const {directions} = this.state;
                    directions.push(result);
                    this.setState({
                        directions: directions
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
    };

    render() {
        console.log("Sfsd", Stations);
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{lat: 1.32677, lng: 103.807}}
                defaultZoom={8}
            >
                {this.state.directions.map((direction, key) => <DirectionsRenderer key={key} directions={direction}/>
                )};
                {Stations.results.map(marker => {
                    return (
                        <Marker
                            key={marker.id}
                            position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) }}
                        >
                        </Marker>
                    )
                })}
            </GoogleMap>
        ));
        return (
            <div className="map">
                <GoogleMapExample
                    containerElement={<div style={{height: `100vh`, width: 'auto'}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                />
            </div>
        );
    }
}
export default Map;