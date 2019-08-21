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
            startPointAddress: "",
            endPointAddress: "",
            startPointCoordinates: {},
            endPointCoordinates: {},
            selectedTimePeriod: null,
            duration: 0,
            vehicles: 0
        }
    }

    handleChange = (address, isStartPoint) => {
        if (isStartPoint) {
            this.setState({startPointAddress: address})
        } else {
            this.setState({endPointAddress: address});
        }
    };

    handleTextChange = e => {
        this.setState({[e.target.name]: parseInt(e.target.value)})
    };

    handleSelectChange = selectedOption => {
        this.setState({selectedTimePeriod: selectedOption});
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

    validate = () => {
        const {startPointAddress, endPointAddress} = this.state;
        return (startPointAddress && endPointAddress)
    };

    addRoute = e => {
        e.preventDefault();
        let isValidated = this.validate();
        if (isValidated) {
            const {routesList} = this.props;
            const routesData = [...routesList];
            const {
                startPointCoordinates, endPointCoordinates,
                startPointAddress, endPointAddress,
                selectedTimePeriod, duration, vehicles
            } = this.state;
            if (routesData.length) {
                incrementChar = this.nextChar(incrementChar);
            }

            let data = {startPointCoordinates, endPointCoordinates,
                selectedTimePeriod, duration, vehicles, incrementChar,
                startPointAddress, endPointAddress
            };

            routesData.push(data);
            this.props.setRoutes(routesData);

            this.setState({
                selectedTimePeriod: null,
                duration: 0,
                vehicles: 0,
                startPointAddress: '',
                endPointAddress: "",
                startPointCoordinates: {},
                endPointCoordinates: {},
            })
        } else {
            alert("Please enter route correctly");
        }

    };

    handleEdit = route => {
        this.handleRemove(route);
        this.setState({
            selectedTimePeriod: route.selectedTimePeriod,
            duration: route.duration,
            vehicles: route.vehicles,
            startPointAddress: route.startPointAddress,
            endPointAddress: route.endPointAddress,
            startPointCoordinates: route.startPointCoordinates,
            endPointCoordinates: route.endPointCoordinates,
        })
    };

    handleRemove = route => {
        const {routesList} = this.props;
        let routesData = [...routesList];
        for(let i = 0; i < routesData.length; i++ ) {
            if(route.incrementChar === routesData[i].incrementChar) {
                routesData.splice(i, 1)
            }
        }
        this.props.setRoutes(routesData);
    };

    nextChar = c => {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    };

    render() {
        const {startPointAddress, endPointAddress, selectedTimePeriod, duration, vehicles} = this.state;
        const {routesList} = this.props;
        const timePeriodOptions = [
            {value: 'Month', label: 'Month'},
            {value: 'Quarter', label: 'Quarter'},
            {value: 'Half Year', label: 'Half year'},
            {value: 'Year', label: 'Year'},
        ];

        return (
            <div className="journeyPlanner-popup-container">
          <span className="journeyPlanner-close-icon">
            <img src={img1} alt="Close" onClick={() => this.props.hideRouteList()}/>
          </span>
                <div className="clearfix journeyPlanner-row">
                    {routesList.length ? <div className="journeyPlanner-col left-col">
                        <h3>Your Routes</h3>
                        <div className="journey-list">
                            <div className="journey-list-items-group">
                                {
                                    routesList.map((route, key) => {
                                        return (
                                            <div key={key} className="clearfix journey-list-item">
                                                <div className="journey-series">{route.incrementChar}</div>
                                                <div className="journey-points">
                                                    <span
                                                        className="journey-start-point">{route.startPointAddress}</span>
                                                    <span className="journey-travel-icon">
                                                        <img src={img4} alt="Travel"/>
                                                    </span>
                                                    <span className="journey-end-point">{route.endPointAddress}</span>
                                                </div>
                                                <div className="journey-edit-remove" onClick={() => this.handleEdit(route)}>
                                                    <span className="journey-edit">
                                                        <img src={img2} alt=""/>
                                                    </span>
                                                    <span className="journey-remove" onClick={() => this.handleRemove(route)}>
                                                        <img src={img3} alt=""/>
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <input onClick={() => this.props.hideRouteList()} type="button" name="journey_see_my_routes" value="See my routes"
                               className="journey-see-routes-btn"/>
                    </div>: null}

                    {!routesList.length && <div className="journeyPlanner-col left-col">
                        <h3>Your Routes</h3>
                        <div className="giveItGo-group">
                            <h3 className="your-routes">Give it a go.</h3>
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
                                                <div className="autocomplete-dropdown-container pac-container pac-logo">
                                                    {loading && <div>Loading...</div>}
                                                    {suggestions.map(suggestion => {
                                                        const className = suggestion.active
                                                            ? 'suggestion-item--active pac-item pac-item-selected'
                                                            : 'suggestion-item pac-item';
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
                                                <div className="autocomplete-dropdown-container pac-container pac-logo">
                                                    {loading && <div>Loading...</div>}
                                                    {suggestions.map(suggestion => {
                                                        const className = suggestion.active
                                                            ? 'suggestion-item--active pac-item'
                                                            : 'suggestion-item pac-item';
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
                                                                <span class="pac-icon pac-icon-marker"></span>
                                                                <span class="pac-item-query">{suggestion.description}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </PlacesAutocomplete>
                                </div>
                            </fieldset>
                            <fieldset className="route-details-fieldset">
                                <h3>Your fleet route details</h3>
                                <div className="journeyPlanner-form-field">
                                    <p>
                                        <strong>In an average </strong>
                                        <div className="time-period-select">
                                            <Select
                                                value={selectedTimePeriod}
                                                onChange={this.handleSelectChange}
                                                options={timePeriodOptions}
                                            />
                                        </div>
                                        <strong>, </strong>
                                        <input type="number"
                                               value={vehicles}
                                               min={0}
                                               onChange={this.handleTextChange}
                                               name="vehicles"
                                               className="fleet-take-duration"
                                               placeholder="0"
                                        />
                                        <strong>vehicles in my fleet take this route for</strong>
                                        <input type="number"
                                               min={0}
                                               className="fleet-take-duration"
                                               value={duration}
                                               onChange={this.handleTextChange}
                                               name="duration" placeholder="0"
                                        />
                                        <strong>times.</strong>
                                    </p>
                                </div>
                            </fieldset>
                            <input className="add-journeyRoute-btn" onClick={this.addRoute}
                                   type="submit" name="add_route" value="Add Route"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        routesList: state.routesReducer.routes
    };
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
