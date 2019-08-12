/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import './style.css';
import RoutesList from './../RoutesList'
import StartOver from './../StartOver'
import MapContainer from './../MapBox'


class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      routeList :false,
      startOver : false,
      routesArray : {
        "A": ["Torquay", "Exeter"],
        "B": ["Exmouth", "Okehampton"],
        "C": ["Penzance", "Falmouth"]
    }
    }
  }

  showRouteList = () => {
    if(this.state.routeList){
      this.setState({
        startOver: true,
        routeList: false
      })
    }
    else{
      this.setState({
        startOver: false,
        routeList: true
      })
    }
  }

  hideRouteList = () => {
    this.setState({
      routeList: false
    })
  }



  render() {
    return (
      <div className={`${(!this.state.routeList && !this.state.startOver) ? '' : 'dark-layor'}`}>
         <MapContainer/>
         <div className="create-another-fleet-route-section">
            <div className="page-center full-height">
             {this.state.routeList && <RoutesList  hideRouteList={() => this.hideRouteList()} routesArray={this.state.routesArray}/>}
             <StartOver show={this.state.startOver} showFunction={() => this.showRouteList()} hideRouteList={() => this.hideRouteList()}/>
            </div>
         </div>		
      </div>
      );
  }
}

export default Component1;
