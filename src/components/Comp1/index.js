/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import './style.css';
import RoutesList from './../RoutesList'
import StartOver from './../StartOver'
import MapContainer from './../MapBox'
import SideMapComp from './../SideMapComp'


class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      showModal :true,
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

  hideRouteList = () => {
    this.setState({
      showModal: false
    })
  };

  render() {
    return (
      //<div className={`${(!this.state.showModal && !this.state.startOver) ? '' : 'dark-layor'}`}>
        <div className={this.state.showModal ?  "dark-layor" : ""}>
         <MapContainer/>
          <div className="create-another-fleet-route-section">
            <div className="page-center">
             {this.state.showModal && <RoutesList  hideRouteList={() => this.hideRouteList()} routesArray={this.state.routesArray}/>}
             <StartOver showFunction={() => this.showRouteList()} hideRouteList={() => this.hideRouteList()}/>
            </div>
         </div>
         {/*<SideMapComp/>*/}
      </div>
      );
  }
}

export default Component1;
