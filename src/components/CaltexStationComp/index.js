import React from 'react';
import './style.css';
import img1 from './../../img/icons_close00.svg';
import img2 from './../../img/4444444.png';

class CaltexStationComp extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="CaltexStationComp-outer-wrap">
          <div className="map-overlay-outer-wrap">
                    <div className="map-overlay-comp-wrap">
                        <div className="cs-overlay-heading">
                            
                        Caltex Tikay
                        
                        </div>
                        <p>Quirino Ave, San Dionisio, Philippines</p>
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
                        <div className="bottom-text-wrap">
                            <p>
                            5 Fuel Options • 6 Amenities
                            </p>
                            <a href="#">More details</a>
                        </div>
                    </div>
                  </div>
            
                  
      </div>

      );
  }
}

export default CaltexStationComp;
