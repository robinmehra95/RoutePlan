/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import './style.css';
import RoutesList from './../RoutesList'
import StartOver from './../StartOver'
import MapContainer from './../MapBox'
import TruckComp from './../TruckComp'
import MapStations from './../MapStations'


class Component1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true,
            showTruckComp: true,
            routesArray: {
                "A": ["Torquay", "Exeter"],
                "B": ["Exmouth", "Okehampton"],
                "C": ["Penzance", "Falmouth"]
            }
        }
    }

    showRouteList = () => {
        this.setState({showModal: true})
        // if(this.state.showModal){
        //   this.setState({
        //     showModal: true
        //   })
        // }
        // else{
        //   this.setState({
        //     showModal: true
        //   })
        // }
    };

    hideRouteList = () => {
        this.setState({
            showModal: false,
            showTruckComp: true
        })
    };

    closeTruckComp = () => {
        this.setState({
            showTruckComp: false,
            showModal: true
        })
    };

    hideAllModals = () => {
        this.setState({
            showTruckComp: false,
            showModal: false
        })
    };

    render() {
        return (
            //<div className={`${(!this.state.showModal && !this.state.startOver) ? '' : 'dark-layor'}`}>
            <div className={this.state.showModal ? "dark-layor" : ""}>
                {this.state.showTruckComp && <TruckComp closeTruckComp={() => this.closeTruckComp()}/>}
                <MapContainer/>

                {!this.state.showTruckComp && <div className="create-another-fleet-route-section">
                    <div className="page-center">
                        {this.state.showModal &&
                        <RoutesList viewRoutes={this.hideAllModals} hideRouteList={() => this.hideRouteList()}
                                    routesArray={this.state.routesArray}/>}
                        <StartOver showFunction={() => this.showRouteList()}
                                   hideRouteList={() => this.hideRouteList()}/>
                    </div>
                </div>}
            </div>
        );
    }
}

export default Component1;
