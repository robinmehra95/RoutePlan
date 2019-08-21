import React from 'react';
import './style.css';
import img1 from './../../img/icons_close00.svg';
import img2 from './../../img/4444444.png';
import CaltexStationComp from './../CaltexStationComp';

import img3 from './../../img/icons_select_arrow@1x.svg';

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
          <ul>
            <li className="filter-station">Filter stations by</li>
            <li className="routes">
              Routes <span> 2</span> <span className="arrow-icon"><img src={img3}/></span>
            </li>
            <li className="fuels">
              Fuels available <span> 2</span> <span className="arrow-icon"><img src={img3}/></span>
            </li>
            <li className="amenties">
              amenities <span> 2</span><span className="arrow-icon"><img src={img3}/></span>
            </li>
            <li>
              <p>
                Clear All 
              </p>
            </li>
          </ul>
        </div>
        <div className="station-wrap">
           <div className="station-inner-wrap">
              <div className="col-wrap">
                <div className="left-col">
                    <img src={img2} />
                </div>
                <div className="right-col">
                    <CaltexStationComp/>
                </div>
              </div>
           </div>
           <div className="station-inner-wrap">
              <div className="col-wrap">
                <div className="left-col">
                    <img src={img2} />
                </div>
                <div className="right-col">
                    <CaltexStationComp/>
                </div>
              </div>
           </div>
           <div className="station-inner-wrap">
              <div className="col-wrap">
                <div className="left-col">
                    <img src={img2} />
                </div>
                <div className="right-col">
                    <CaltexStationComp/>
                </div>
              </div>
           </div>
           <div className="station-inner-wrap">
              <div className="col-wrap">
                <div className="left-col">
                    <img src={img2} />
                </div>
                <div className="right-col">
                    <CaltexStationComp/>
                </div>
              </div>
           </div>

          <div className="cs-pagination">
                <div className="left-arrow">
                  <img src={img3}/>
                </div>
                <div className="page-no-wrap">
                  Page  2  of 15
                </div>
                <div className="right-arrow">
                  <img src={img3}/>
                </div>
          </div>
        </div>
      </div>
      );
  }
}

export default MapStations;
