import React from 'react';
import './style.css';
import img1 from './../../img/icons_close00.svg';
import img2 from './../../img/4444444.png';
import SmallMapComp from './../SmallMapComp'


class SideMapComp extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          markerData:props.markerData
      }
  }



  render() {
    return (
      <div className="sidemap-overlay-outer-wrap">
          <div className="cs-top-row">
            <a className="close-btn cursor-pointer"  onClick={() => this.props.showSidemapComp()}><img src={img1}/></a>
            {this.props.viaMapSationList && <a className="top-back-link cursor-pointer" onClick={() => this.props.showSidemapComp(null,true)}>
                Back to Stations Listing
            </a>}
          </div>
          <div className="col-right">
            <SmallMapComp className="cs-main-img" info={this.state.markerData}/>
          </div> 
          <div className="col-left">
              <div className="cs-main-heading">
                  {this.state.markerData.name}
              </div>
              <div className="cs-sub-heading">
                  {this.state.markerData.street+" "+ this.state.markerData.city +" "+ this.state.markerData.state+", "+this.state.markerData.country +" "+ this.state.markerData.postalCode}
              </div>
              <div className="tel-time-wrap row">
                <div className="col-sm-6 col-xs-6 icon-row">
                  <span className="icon">
                      <img src={img1}/>
                  </span>
                  <span className="text-tel">
                      {this.state.markerData.phoneNumber}
                  </span>
                </div>
                <div className="col-sm-6 col-xs-6 icon-row">
                  <span className="icon">
                      <img src={img1}/> 
                  </span>
                  <span className="text-tel">
                      24-Hour
                  </span>
                </div>
              </div>
              <div className="two-col-wrap">
                <div className="two-col-left-wrap">
                  <p>Fuels Available:</p>
                  <ul>
                      {this.state.markerData.fuelsName.map((item, index) => (
                          <li>{item}</li>
                      ))}
                  </ul>
                </div>

                <div className="two-col-right-wrap">
                  <p>Key Amentities:</p>
                    <ul className="with-icon">
                        {this.state.markerData.amenitiesName.map((item, index) => (
                            <li ><span className="cs-icon air-water-station"></span>{item}</li>   
                                                                                              // air-water-station will depend on amenitiesName 
                        ))}
                    </ul>
                </div>

              </div>
            </div>
          
          
          
                  
      </div>

      );
  }
}

export default SideMapComp;
