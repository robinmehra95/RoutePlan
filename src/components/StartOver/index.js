/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setRoutes} from "../../actions/routes.actions";


import './style.css';
import img1 from './../../img/btns_carousel-arrow-red-white.svg'
import img2 from './../../img/icons_edit_white.svg'
import img3 from './../../img/icons_start_over.svg'
import img4 from './../../img/icon_journey planner_route.svg'
import img5 from './../../img/icon_journey planner_route(1).svg'
import img6 from './../../img/icon_journey planner_route(2).svg'
import img7 from './../../img/icons_print.svg'
import img8 from './../../img/icons_download.svg'
import img9 from './../../img/icons_share.svg'
import Stations from "../../stations";


class StartOver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.showInfo !== this.props.showInfo) {
            this.setState({ showInfo: nextProps.showInfo })
        }
    }

    showHideInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    };

    showFunctionWrap = (e) => {
        e.stopPropagation();
        this.setState({
            showInfo: false
        });
        this.props.showFunction()
    };

    startOver = (e) => {
        e.stopPropagation();
        this.props.setRoutes([]);
        this.setState({
            showInfo: false
        });
        this.props.showFunction()
    };

    calculatevehicles = () => {
        const {routes} = this.props;
        let vehicles = 0;
        routes.map(route => vehicles += parseInt(route.vehicles));
        return vehicles;
    };

    calculateDailyFleetMileage = () => {
        const {routes} = this.props;
        let dailyFleetMileage = 0;
        return dailyFleetMileage;
    };



    render() {
        const Config = window.config;
        const {routes, stations} = this.props;
        let vehicles = this.calculatevehicles();
        let dailyFleetMileage = this.calculateDailyFleetMileage();
        return (
            <div>
                <div className="displaying-routes-container">
                    <div className="clearfix displaying-route-topSection">
                        <div className="displayingRoute-topSec-row" onClick={() => this.showHideInfo()}>
                            <div className="displayingRoute-topSec-col left-col">
                                <h6>{Config.displayRoute.multipleRouteLabel.replace("{count}",routes && routes.length)}</h6>
                            </div>
                            <div className="displayingRoute-topSec-col center-col">
                                <img src={img1} alt="Arrow" onClick={() => this.showHideInfo()}/>
                            </div>
                            <div className="displayingRoute-topSec-col right-col">
                                <ul className="user-route-change-list">
                                    <li onClick={(e) => this.showFunctionWrap(e)}>
                                        <img src={img2} alt="Add and Edit Route"/> <span>{Config.displayRoute.editRouteLabel}</span>
                                    </li>
                                    <li onClick={(e) => this.startOver(e)}>
                                        <img src={img3} alt="Start Over"/> <span>{Config.displayRoute.resetLabel}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {this.state.showInfo && <div className="clearfix displaying-route-bottomSection">
                        <div className="displayingRoute-btSec-row">
                            <div className="displayingRoute-btSec-col left-col">
                                <h5>{Config.displayRoute.journeyOverviewHeading}</h5>
                                <ul className="journey-option-list">
                                    <li>
                                        <p>{Config.displayRoute.vehicleLabel}</p>
                                        <h3>{vehicles} <img src={img4} alt=""/></h3>
                                    </li>
                                    <li>
                                        <p>{Config.displayRoute.routesLabel}</p>
                                        <h3>{routes && routes.length} <img src={img5} alt=""/></h3>
                                    </li>
                                    <li>
                                        <p>{Config.displayRoute.stationLabel}</p>
                                        <h3>{stations} <img src={img6} alt=""/></h3>
                                    </li>
                                </ul>
                                <p>{Config.displayRoute.multipleRouteJourneyDesc.replace("{vehicle}",vehicles).replace("{station}", Stations && Stations.results && Stations.results.length).replace("{route}",routes && routes.length)}</p>
                                <a className="see-fullList-link cursor-pointer" onClick={() => this.props.onShowAllStations()}>See full list of stations
                                    <img src="" alt=""/></a>
                            </div>
                            <div className="displayingRoute-btSec-col center-col">
                                <h5>{Config.displayRoute.dailyFleetHeading}</h5>
                                <h3>{dailyFleetMileage}km</h3>
                                <ul className="fleet-mileage-list">
                                    <li>A Caltex station every 100km on average</li>
                                    <li>A 24-hour Caltex service station every 100km</li>
                                    <li>Fuel with Techron that cleans my fleet’s engine as it runs</li>
                                    <li>Flexible fleet credit management with Starcard fleet program</li>
                                    <li>Starcard fleet program that provides transparent and accountable spending</li>
                                </ul>
                                <ul className="print-download-share-list">
                                    <li className="print-li">
                                        <img src={img7} alt=""/> {Config.displayRoute.printLabel}
                                    </li>
                                    <li className="download-li">
                                        <img src={img8} alt=""/> {Config.displayRoute.downloadLabel}
                                    </li>
                                    <li className="share-li">
                                        <img src={img9} alt=""/> {Config.displayRoute.shareLabel}
                                    </li>
                                </ul>
                            </div>
                            <div className="displayingRoute-btSec-col right-col">
                                <div className="think-make-good-fit-group">
                                    <h3>Think we make a good fit?</h3>
                                    <p>Personalise a Caltex fleet program for your business.</p>
                                    <button className="displayingRoute-btn" onClick={() => this.props.onSpeakToUs()}>Speak to us</button>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        routes: state.routesReducer.routes,
        showInfo: state.routesReducer.showInfo,
        stations: state.routesReducer.stationsData
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

export default connect(mapStateToProps, mapDispatchToProps)(StartOver);
