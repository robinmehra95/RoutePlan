/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import {withGoogleMap, GoogleMap, DirectionsRenderer, Marker, InfoWindow} from 'react-google-maps';
import './style.css';
import img1 from './../../img/icons_close00.svg';
import Stations from "../../stations";
import CaltexIcon from "../../img/icon-caltex-circle.png";
import MarkerIcon from "../../img/marker_icon.png";
import {setStations, setMarkerIndex} from "../../actions/routes.actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {maxDistanceOfRadius} from "../../constants";

const {MarkerClusterer} = require("react-google-maps/lib/components/addons/MarkerClusterer");

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            directions: [],
            selectedMarker: {},
            stations: []
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps, nextContext) {
        const {routes} = nextProps;
        let directions = [];
        routes.map(route => {
            this.createDirections(route.startPointCoordinates, route.endPointCoordinates, directions);
        });
        if (routes.length === 0) {
            this.setState({directions: []})
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
            (response, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    const {markerIndex} = this.props;
                    console.log("marker index =====>", markerIndex);
                    var my_route = response.routes[0];
                    for (var i = 0; i < my_route.legs.length; i++) {
                        var startLocationMarker = new window.google.maps.Marker({
                            position: my_route.legs[i].start_location,
                            label: ""+(i+1),
                        });
                    }
                    this.props.setMarkerIndex(i+1);
                    console.log("marker index after origin ====>", markerIndex);
                    var endLocationMarker = new window.google.maps.Marker({
                        position: my_route.legs[i-1].end_location,
                        label: ""+(i+1),
                    });
                    console.log("markers", response);
                    this.props.setMarkerIndex(i+2);
                    directions.push(response);
                } else {
                    console.error(`error fetching directions ${response}`);
                }
                this.setState({
                    directions: directions
                }, () => {
                    this.calculateStationsToShow();
                });
            }
        );

    };

    handleMarkerClick = (marker) => {
        this.setState({selectedMarker: marker})
    };

    calculateStationsToShow = () => {
        // DONOT DELETE THIS BELOW CODE

        // var myRoute = this.state.directions && this.state.directions.length && this.state.directions[0].routes[0].legs[0];
        // console.log("sdf", myRoute);
        // console.log("gfdd", myRoute.steps)
        // for (var i = 0; i < myRoute && myRoute.steps.length; i++) {
        // debugger
        //
        //     console.log("myRoute.steps[i].start_point", myRoute.steps[i].start_point)
        // }

        const {directions} = this.state;
        let stations = [];
        Stations.results.map(station => {
            directions.map((direction) => {
                let originLocation = direction.request.origin.location;
                let destinationLocation = direction.request.destination.location;
                let stationLatLngObj = new window.google.maps.LatLng(station.latitude, station.longitude);
                let distanceFromOrigin = window.google.maps.geometry.spherical.computeDistanceBetween(originLocation, stationLatLngObj);
                let distanceFromDestination = window.google.maps.geometry.spherical.computeDistanceBetween(destinationLocation, stationLatLngObj);
                if(distanceFromDestination < maxDistanceOfRadius || distanceFromOrigin < maxDistanceOfRadius) {
                    stations.push(station);
                }
            });
        });
        this.props.setStations(stations.length);
        this.setState({ stations: stations });
    };

    render() {
        const that = this;
        const {stations} = this.state;
        const GoogleMapExample = withGoogleMap(props => (
                <GoogleMap
                    defaultCenter={{lat: 1.32677, lng: 103.807}}
                    defaultZoom={12}
                >
                {this.state.directions.map((direction, key) => <DirectionsRenderer options={{suppressMarkers: true}} key={key} directions={direction}/>
                )}
                        <MarkerClusterer
                            onClick={props.onMarkerClustererClick}
                            averageCenter
                            enableRetinaIcons
                            gridSize={12}
                        //     styles={[
                        //         {
                        //             url: {CaltexIcon},
                        //             height: 26,
                        //             width: 26,
                        //             fontFamily:"Lato",
                        //             textColor:"#FFF",
                        //         },
                        //         {
                        //             url: {CaltexIcon},
                        //             height: 29,
                        //             width: 29,
                        //             fontFamily:"Lato",
                        //             textColor:"#FFF",
                        //         },
                        //         {
                        //             url: {CaltexIcon},
                        //             height: 34,
                        //             width: 34,
                        //             fontFamily:"Lato",
                        //             textColor:"#FFF",
                        //         },
                        //         {
                        //             url: {CaltexIcon},
                        //             height: 40,
                        //             width: 40,
                        //             fontFamily:"Lato",
                        //             textColor:"#FFF",
                        //         },
                        //         {
                        //             url: {CaltexIcon},
                        //             height: 46,
                        //             width: 46,
                        //             fontFamily:"Lato",
                        //             textColor:"#FFF",
                        //         }
                        //     ]}
                        //
                            >
                            {stations.map(marker => (
                                <Marker
                                    icon={MarkerIcon}
                                    key={marker.id}
                                    onClick={() => this.handleMarkerClick(marker)}
                                    position={{lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude)}}
                                >
                                    {that.state.selectedMarker === marker &&
                                    <InfoWindow>
                                        <div className="map-overlay-outer-wrap">
                                            <div className="map-overlay-comp-wrap">
                                                <a href="#" className="close-btn"><img src={img1}/></a>
                                                <div className="cs-overlay-heading">

                                                {marker.name}

                                                </div>
                                                <p>{marker.street+" "+ marker.city +" "+ marker.state+", "+marker.country +" "+ marker.postalCode}</p>

                                                <div className="tel-time-wrap row">
                                                    <div className="col-sm-6 col-xs-6 icon-row">
                                                <span className="icon">
                                                    <img src={img1}/>
                                                </span>
                                                        <span className="text-tel">
                                                            {marker.phoneNumber}
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
                                                        {marker.fuelsName && marker.fuelsName.length} Fuel Options • {marker.amenitiesName && marker.amenitiesName.length} Amenities
                                                    </p>
                                                    <a className="cursor-pointer"
                                                       onClick={() => this.props.showSidemapComp(marker)}>More details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </InfoWindow>}

                                </Marker>
                            ))}
                        </MarkerClusterer>

            </GoogleMap>
        ));

        return (
            <div className="map">
                <GoogleMapExample
                    containerElement={<div style={{height: `100vh `, width: 'auto'}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        routes: state.routesReducer.routes,
        markerIndex: state.routesReducer.markerIndex
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            setStations,
            setMarkerIndex
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);