import React from 'react';
import './style.css';
import img1 from './../../img/icons_close00.svg';


class MapStations extends React.Component {
  constructor(props) {
    super(props);   
  }



  render() {
    return (
      <div className="mapstations-comp-wrap">
        <div className="cs-top-row">
            <a href="#" className="close-btn"><img src={img1}/></a>
        </div>
        <div className="comp-heading">
          Displaying 4 of 45 Stations along your 3 routes
        </div>
        <div className="drop-down-list">
          
        </div>
      </div>
      );
  }
}

export default MapStations;
