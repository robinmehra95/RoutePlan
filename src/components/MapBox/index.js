/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import {withGoogleMap, GoogleMap, DirectionsRenderer, Marker} from 'react-google-maps';
import './style.css';
import Stations from "../../stations";
import CaltexIcon from "../../img/icon-caltex-circle.png";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            directions: []
        }
    }

    componentDidMount() {
        console.log("asdff");

    }

    componentWillReceiveProps(nextProps, nextContext) {
        const {routes} = nextProps;
        if(routes && routes.length) {
            routes.map(route => {
                this.createDirections(route.startPointCoordinates, route.endPointCoordinates);
            });
        }
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
        // console.log("Sfsd", Stations);
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
                            icon={CaltexIcon}
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
function mapStateToProps(state) {
    return {
        routes: state.routesReducer.routes
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {

        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);