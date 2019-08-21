/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import {withGoogleMap, GoogleMap, DirectionsRenderer, Marker, InfoWindow} from 'react-google-maps';
import './style.css';
import img1 from './../../img/icons_close00.svg';
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
                                <div className="map-overlay-outer-wrap">
                                    <div className="map-overlay-comp-wrap">
                                        <a href="#" className="close-btn"><img src={img1}/></a>
                                        <div className="cs-overlay-heading">
                                            
                                        {marker.shelter}
                                        
                                        </div>
                                        <p>Quirino Ave, San Dionisio, Philippines</p>
                                        <div className="tel-time-wrap row">
                                            <div className="col-sm-6 col-xs-6 icon-row">
                                                <span className="icon">
                                                    <img src={img1}/>
                                                </span>
                                                <span className="text-tel">
                                                    +66 2 279 7966
                                                </span>
                                            </div>
                                            <div className="col-sm-6 col-xs-6 icon-row">
                                                <span className="icon">
                                                    <img src={img1}/> 
                                                </span>
                                                <span className="text-tel">
                                                    24-Hour
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bottom-text-wrap">
                                            <p>
                                            5 Fuel Options • 6 Amenities
                                            </p>
                                            <a href="#">More details</a>
                                        </div>
                                    </div>
                                    </div>
                            </InfoWindow>}
                            
                        </Marker>
                    )
                })}
            </GoogleMap>
        ));

        return (
            <div className="map">
                <GoogleMapExample
                    containerElement={<div style={{height: `calc(100vh + 86px)`, width: 'auto'}}/>}
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