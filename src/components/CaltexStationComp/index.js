import React from 'react';
import './style.css';
import img1 from './../../img/icons_close00.svg';
import img2 from './../../img/4444444.png';

class CaltexStationComp extends React.Component {
  constructor(props) {
    super(props);
      
  }

  showSidemap = (markerData,val) => {
    this.props.showSidemapComp(markerData,val)
  };



  render() {
    const {markerData } = this.props;
    //const markerData = this.state.markerData;
    return (
      <div className="CaltexStationComp-outer-wrap">
          <div className="map-overlay-outer-wrap">
                    <div className="map-overlay-comp-wrap">
                        <div className="cs-overlay-heading">
                            
                            {markerData.name}
                        
                        </div>
                        <p>{markerData.street+" "+ markerData.city +" "+ markerData.state+", "+markerData.country +" "+ markerData.postalCode}</p>
                        <div className="tel-time-wrap row">
                            <div className="col-sm-6 col-xs-6 icon-row">
                                <span className="icon">
                                    <img src={img1}/>
                                </span>
                                <span className="text-tel">
                                    {markerData.phoneNumber}
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
                                {markerData.fuelsName && markerData.fuelsName.length} Fuel Options • {markerData.amenitiesName && markerData.amenitiesName.length} Amenities
                            </p>
                            <a className="cursor-pointer" onClick={() => this.showSidemap(markerData,true)}>More details</a>
                        </div>
                    </div>
                </div>            
                  
      </div>

      );
  }
}

export default CaltexStationComp;
