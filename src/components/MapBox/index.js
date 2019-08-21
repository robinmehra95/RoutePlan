/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import {withGoogleMap, GoogleMap, DirectionsRenderer, Marker, InfoWindow} from 'react-google-maps';
import './style.css';
import Stations from "../../stations";
import CaltexIcon from "../../img/icon-caltex-circle.png";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            directions: [],
            selectedMarker: {}
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps, nextContext) {
        const {routes} = nextProps;
        let currentPropsRoutes = this.props.routes;
        if(currentPropsRoutes.length !== routes.length) {
            let directions =[];
            routes.map(route => {
                this.createDirections(route.startPointCoordinates, route.endPointCoordinates, directions);
            });
        }
        if(routes.length === 0) {
            this.setState({ directions: [] })
        }
    }

    createDirections = (origin, destination, directions) => {
        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: window.google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    directions.push(result);
                } else {
                    console.error(`error fetching directions ${result}`);
                }
                this.setState({
                    directions: directions
                });
            }
        );

    };

    handleMarkerClick = (marker) => {
        this.setState({ selectedMarker: marker })
    };

    render() {
        const that = this;
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{lat: 1.32677, lng: 103.807}}
                defaultZoom={8}
            >
                {this.state.directions.map((direction, key) => <DirectionsRenderer key={key} directions={direction}/>
                )}
                {Stations.results.map(marker => {
                    console.log("marker", marker)
                    return (
                        <Marker
                            icon={CaltexIcon}
                            key={marker.id}
                            onClick={() => this.handleMarkerClick(marker)}
                            position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) }}
                        >
                            {that.state.selectedMarker === marker &&
                            <InfoWindow>
                                <div>
                                    {marker.shelter}
                                </div>
                            </InfoWindow>}
                            }
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