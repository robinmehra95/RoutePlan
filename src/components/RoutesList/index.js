import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Select from 'react-select';
import {setRoutes} from "../../actions/routes.actions";

import './style.css';
import img1 from './../../img/icons_close00.svg'
import img2 from './../../img/icons_red_edit@1x.svg'
import img3 from './../../img/icons_remove@1x.svg'
import img4 from './../../img/icons_travel_arrow@1x.svg'
import img5 from './../../img/routegraphic@3x.png'

let incrementChar = "A";

class RoutesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: false,
            showRoutes: false,
            startPointAddress: '',
            endPointAddress: "",
            startPointCoordinates: {},
            endPointCoordinates: {},
            routeNames: []
        }
    }

    handleChange = (address, isStartPoint) => {
        if (isStartPoint) {
            this.setState({startPointAddress: address})
        } else {
            this.setState({endPointAddress: address});
        }
    };

    handleSelect = (address, isStartPoint) => {

        if (isStartPoint) {
            geocodeByAddress(address)
                .then(results => getLatLng(results[0]))
                .then(latLng => {
                    this.setState({startPointCoordinates: latLng, startPointAddress: address})
                })
                .catch(error => console.error('Error', error));
        } else {
            geocodeByAddress(address)
                .then(results => getLatLng(results[0]))
                .then(latLng => {
                    this.setState({endPointCoordinates: latLng, endPointAddress: address})
                })
                .catch(error => console.error('Error', error));
        }
    };

    addRoute = () => {
        const {
            startPointCoordinates, endPointCoordinates,
            startPointAddress, endPointAddress, routeNames
        } = this.state;
        let data = {startPointCoordinates, endPointCoordinates};
        if(routeNames.length) {
            incrementChar = this.nextChar(incrementChar);
        }
        this.props.setRoutes(data);
        let routes = [...routeNames];

        let route = {
            startingRouteName: startPointAddress,
            endingRouteName: endPointAddress,
            displayChar: incrementChar
        };

        routes.push(route);
        this.setState({routeNames: routes})
    };

    nextChar = c => {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    };

    render() {
        const {startPointAddress, endPointAddress, routeNames} = this.state;
        console.log("routeNames", routeNames);
        return (
            <div className="journeyPlanner-popup-container">
          <span className="journeyPlanner-close-icon">
            <img src={img1} alt="Close" onClick={() => this.props.hideRouteList()}/>
          </span>
                <div className="clearfix journeyPlanner-row">
                    {!this.state.showRoutes && <div className="journeyPlanner-col left-col">
                        <h3>Your Routes</h3>
                        <div className="journey-list">
                            <div className="journey-list-items-group">
                                {
                                    routeNames.map((route, key) => {
                                        return (
                                            <div key={key} className="clearfix journey-list-item">
                                                <div className="journey-series">{route.displayChar}</div>
                                                <div className="journey-points">
                                                    <span className="journey-start-point">{route.startingRouteName}</span>
                                                    <span className="journey-travel-icon">
                                            <img src={img4} alt="Travel"/>
                                        </span>
                                                    <span className="journey-end-point">{route.endingRouteName}</span>
                                                </div>
                                                <div className="journey-edit-remove">
										<span className="journey-edit">
                                            <img src={img2} alt=""/>
                                    </span>
                                                    <span className="journey-remove">
                                        <img src={img3} alt=""/>
                                    </span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <input type="submit" name="journey_see_my_routes" value="See my routes"
                               className="journey-see-routes-btn"/>
                    </div>}

                    {this.state.showRoutes && <div className="journeyPlanner-col left-col">
                        <h3>Your Routes</h3>
                        <div className="giveItGo-group">
                            <h3>Give it a go.</h3>
                            <p>You don’t have any routes, begin by adding in your first fleet route.</p>
                            <img src={img5} width="365" height="285" alt="Give It Go | Route" className="map-markers"/>
                        </div>
                    </div>}


                    <div className="journeyPlanner-col right-col">
                        <form method="post" className="journeyPlanner-form">
                            <fieldset className="create-route-fieldset">
                                <h3>Create another fleet route</h3>
                                <div className="journeyPlanner-form-field">
                                    <label>Start Point <span className="field-strike-sign"/></label>
                                    <PlacesAutocomplete
                                        value={startPointAddress}
                                        onChange={(e) => this.handleChange(e, true)}
                                        onSelect={(e) => this.handleSelect(e, true)}
                                    >
                                        {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                            <div>
                                                <input
                                                    {...getInputProps({
                                                        placeholder: 'Search Places ...',
                                                        className: 'location-search-input',
                                                    })}
                                                />
                                                <div className="autocomplete-dropdown-container">
                                                    {loading && <div>Loading...</div>}
                                                    {suggestions.map(suggestion => {
                                                        const className = suggestion.active
                                                            ? 'suggestion-item--active'
                                                            : 'suggestion-item';
                                                        // inline style for demonstration purpose
                                                        const style = suggestion.active
                                                            ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                                            : {backgroundColor: '#ffffff', cursor: 'pointer'};
                                                        return (
                                                            <div
                                                                {...getSuggestionItemProps(suggestion, {
                                                                    className,
                                                                    style,
                                                                })}
                                                            >
                                                                <span>{suggestion.description}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </PlacesAutocomplete>
                                </div>
                                <div className="journeyPlanner-form-field">
                                    <label>End Point <span className="field-strike-sign"></span></label>
                                    <PlacesAutocomplete
                                        value={endPointAddress}
                                        onChange={(e) => this.handleChange(e, false)}
                                        onSelect={(e) => this.handleSelect(e, false)}
                                    >
                                        {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                            <div>
                                                <input
                                                    {...getInputProps({
                                                        placeholder: 'Search Places ...',
                                                        className: 'location-search-input',
                                                    })}
                                                />
                                                <div className="autocomplete-dropdown-container">
                                                    {loading && <div>Loading...</div>}
                                                    {suggestions.map(suggestion => {
                                                        const className = suggestion.active
                                                            ? 'suggestion-item--active'
                                                            : 'suggestion-item';
                                                        // inline style for demonstration purpose
                                                        const style = suggestion.active
                                                            ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                                            : {backgroundColor: '#ffffff', cursor: 'pointer'};
                                                        return (
                                                            <div
                                                                {...getSuggestionItemProps(suggestion, {
                                                                    className,
                                                                    style,
                                                                })}
                                                            >
                                                                <span>{suggestion.description}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </PlacesAutocomplete>
                                    <input type="button" onClick={this.addRoute}
                                           className="journey-see-routes-btn add-routes-btn" value="Add Route"/>

                                </div>
                            </fieldset>
                            <fieldset className="route-details-fieldset">
                                <h3>Your fleet route details</h3>
                                <div className="journeyPlanner-form-field">
                                    <p>
                                        <strong>In an average </strong>
                                        <select>
                                            <option default="">Select</option>
                                            <option>month</option>
                                            <option>quarter</option>
                                            <option>half year</option>
                                            <option>year</option>
                                        </select>
                                        <strong>, </strong>
                                        <input type="text" name="fleet_take_duration" className="fleet-take-duration"
                                               placeholder="0"/>
                                        <strong>vehicles in my fleet take</strong>
                                    </p>
                                </div>
                                <div className="journeyPlanner-form-field">
                                    <p>
                                        <strong>this route for</strong>
                                        <input type="text" name="fleet_take_duration_repeat"
                                               className="fleet-take-duration" placeholder="0"/>
                                        <strong>times.</strong>
                                    </p>
                                </div>
                            </fieldset>
                            <input className="add-journeyRoute-btn" type="submit" name="add_route" value="Add Route"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            setRoutes
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesList);
