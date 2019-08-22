import React from 'react';
import './style.css';
import img1 from './../../img/icons_close00.svg';
import WithPagination from '../WithPagination';
import img3 from './../../img/icons_select_arrow@1x.svg';

class MapStations extends React.Component {
  constructor(props) {
    super(props);     
  }

  render() {
    return (
      <div className="mapstations-comp-wrap">
        <div className="cs-top-row">
            <a className="close-btn cursor-pointer" onClick={() => this.props.onClose()}><img src={img1}/></a>
        </div>
        <div className="comp-heading">
          Displaying 4 of 45 Stations along your 3 routes
        </div>
        <div className="drop-down-list">
          <ul>
            <li className="filter-station">Filter stations by</li>
            <li className="routes cursor-pointer">
              Routes <span> 2</span> <span className="arrow-icon"><img src={img3}/></span>
            </li>
            <li className="fuels cursor-pointer">
              Fuels available <span> 2</span> <span className="arrow-icon"><img src={img3}/></span>
            </li>
            <li className="amenties cursor-pointer">
              amenities <span> 2</span><span className="arrow-icon"><img src={img3}/></span>
            </li>
            <li>
              <p className="cursor-pointer">
                Clear All 
              </p>
            </li>
          </ul>
        </div>
        <WithPagination allStations={null}/>
      </div>
      );
  }
}

export default MapStations;
