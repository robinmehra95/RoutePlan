import React from 'react';
import './style.css';
import img1 from './../../img/icons_close00.svg';
import img2 from './../../img/4444444.png';

class SideMapComp extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="sidemap-overlay-outer-wrap">
          <div className="cs-top-row">
            <a href="#" className="close-btn"><img src={img1}/></a>
            <a href="#" className="top-back-link">
                Back to Stations Listing
            </a>
          </div>
          <div className="col-right">
            <img src={img2} className="cs-main-img"/>
          </div> 
          <div className="col-left">
              <div className="cs-main-heading">
                  Caltex Tikay
              </div>
              <div className="cs-sub-heading">
                  McArthur H-way, Tikay, Malolos, Philippines
              </div>
              <div className="tel-time-wrap row">
                <div className="col-sm-6 col-xs-6 icon-row">
                  <span className="icon">
                      <img src={img1}/>
                  </span>
                  <span className="text-tel">
                      +66 2 279 7966
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
                    <li>Gold with Techron®</li>
                    <li>Silver with Techron®</li>
                    <li>Diesel with Techron® D</li>
                    <li>Lubricants (Delo & Havoline)</li>
                    <li>Platinum 98 with Techron®</li>
                    <li>Premium 95 with Techron®</li>
                  </ul>
                </div>

                <div className="two-col-right-wrap">
                  <p>Fuels Available:</p>
                  <ul className="with-icon">
                    <li><img src={img1}/>5-Star Refreshrooms</li>
                    <li><img src={img1}/>Workshop</li>
                    <li><img src={img1}/>Convenience Store</li>
                    <li><img src={img1}/>Air / Water Stations</li>
                    <li><img src={img1}/>Accept StarCards</li>
                    <li><img src={img1}/>Accept Credit Cards</li>
                  </ul>
                </div>

              </div>
            </div>
          
          
          
                  
      </div>

      );
  }
}

export default SideMapComp;
