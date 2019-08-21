import React from 'react';
import './style.css';
import RoutesList from './../RoutesList'
import StartOver from './../StartOver'
import MapContainer from './../MapBox'
import TruckComp from './../TruckComp'

import MapStations from './../MapStations'
import SideMapComp from './../SideMapComp'


class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      showModal :true,
      showTruckComp: true,
      allStations: false,
      showSideMap: false,
      routesArray : {
        "A": ["Torquay", "Exeter"],
        "B": ["Exmouth", "Okehampton"],
        "C": ["Penzance", "Falmouth"]
    }
    }
  }

  showRouteList = () => {
    this.setState({ showModal: true })
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

  toggleAllStations = () => {
    if(this.state.allStations){
      this.setState({
        allStations: false
      })
    }
    else{
      this.setState({
        allStations: true
      })
    }
  };

  hideRouteList = () => {
    this.setState({
      showModal: false
    })
  };

  closeTruckComp = () => {
    this.setState({
      showTruckComp: false
    })
  };

  showSidemapComp = () => {
    if(this.state.showSideMap){
      this.setState({
        showSideMap: false
      })
    }
    else{
      this.setState({
        showSideMap: true
      })
    }
  }

  render() {
    return (
      //<div className={`${(!this.state.showModal && !this.state.startOver) ? '' : 'dark-layor'}`}>
        <div className={this.state.showModal ?  "dark-layor" : ""}>
           {this.state.showTruckComp && <TruckComp closeTruckComp={() => this.closeTruckComp()}/>}
            <MapContainer showSidemapComp={this.showSidemapComp} />
            {this.state.showSideMap && <SideMapComp  showSidemapComp={this.showSidemapComp}/>}
            {this.state.allStations && <MapStations  onClose={this.toggleAllStations} />}
            {!this.state.showTruckComp && <div className="create-another-fleet-route-section">
            <div className="page-center">
             {this.state.showModal && <RoutesList  hideRouteList={() => this.hideRouteList()} routesArray={this.state.routesArray}/>}
             {!this.state.allStations && <StartOver onShowAllStations={this.toggleAllStations}
             showFunction={() => this.showRouteList()} hideRouteList={() => this.hideRouteList()}/>}
            </div>
          </div>}
      </div>
      );
  }
}

export default Component1;
