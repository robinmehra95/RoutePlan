/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import {withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps';
import './style.css';

const mapStyles = {
    width: '100%',
    height: '100%'
};

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            directions: []
        }
    }

    componentDidMount() {
        this.createDirections({lat: 40.756795, lng: -73.954298}, {lat: 41.756795, lng: -78.954298});
        this.createDirections({lat: 42.756500, lng: -73.951298}, {lat: 41.126795, lng: -78.434298});
        this.createDirections({lat: 40.753295, lng: -73.544298}, {lat: 41.756795, lng: -78.954298});
        this.createDirections({lat: 40.752395, lng: -73.954398}, {lat: 41.751395, lng: -78.954138});
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

        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{lat: 40.756795, lng: -73.954298}}
                defaultZoom={13}
            >
                {this.state.directions.map((direction, key) => <DirectionsRenderer key={key} directions={direction}/>
                )};
                <DirectionsRenderer directions={this.state.directions}/>
                <DirectionsRenderer directions={this.state.directions}/>
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
};
export default Map;
// const mapStyles = {
//   width: '100%',
//   height: '100%',
// };
//
// class MapContainer extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//
//   render() {
//     return (
//       <div>
//         <Map
//           google={this.props.google}
//           zoom={8}
//           style={mapStyles}
//           initialCenter={{ lat: 47.444, lng: -122.176}}
//         />
//
//       </div>
//       );
//   }
// }
//
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAgmtah4tami6GIlAtShxGX1BGYQLIICsM'
// })(MapContainer);
