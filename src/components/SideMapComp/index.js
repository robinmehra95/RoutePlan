import React from 'react';
import './style.css';
import img1 from './../../img/icons_close00.svg';
import img2 from './../../img/4444444.png';

class SideMapComp extends React.Component {
  constructor(props) {
    super(props);
    console.log("Pprp........")
      this.state = {
          markerData:props.markerData
      }
  }



  render() {
    return (
      <div className="sidemap-overlay-outer-wrap">
          <div className="cs-top-row">
            <a className="close-btn cursor-pointer"  onClick={() => this.props.showSidemapComp()}><img src={img1}/></a>
            <a className="top-back-link cursor-pointer" onClick={() => this.props.showSidemapComp()}>
                Back to Stations Listing
            </a>
          </div>
          <div className="col-right">
              {/*<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q={this.state.markerData.latitude},{this.state.markerData.longitude}&amp;key=AIzaSyAgmtah4tami6GIlAtShxGX1BGYQLIICsM"></iframe>*/}
              <img src={img2} className="cs-main-img"/>
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
                            <li>{item}</li>
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
