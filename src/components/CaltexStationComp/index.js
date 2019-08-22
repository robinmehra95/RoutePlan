import React from 'react';
import './style.css';
import img1 from './../../img/icons_close00.svg';
import img2 from './../../img/4444444.png';

class CaltexStationComp extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          markerData : props.markerData
      }
  }

  showSidemapComp = (markerData) => {
        if(this.state.showSideMap){
            this.setState({
                showSideMap: false,
                markerData:markerData
            })
        }
        else{
            this.setState({
                showSideMap: true,
                markerData:markerData
            })
        }
    };



  render() {
    return (
      <div className="CaltexStationComp-outer-wrap">
          <div className="map-overlay-outer-wrap">
                    <div className="map-overlay-comp-wrap">
                        <div className="cs-overlay-heading">
                            
                            {this.state.markerData.name}
                        
                        </div>
                        <p>{this.state.markerData.street+" "+ this.state.markerData.city +" "+ this.state.markerData.state+", "+this.state.markerData.country +" "+ this.state.markerData.postalCode}</p>
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
                        <div className="bottom-text-wrap">
                            <p>
                                {this.state.markerData.fuelsName && this.state.markerData.fuelsName.length} Fuel Options • {this.state.markerData.amenitiesName && this.state.markerData.amenitiesName.length} Amenities
                            </p>
                            <a onClick={() => this.showSidemapComp(this.state.markerData)}>More details</a>
                        </div>
                    </div>
                  </div>
            
                  
      </div>

      );
  }
}

export default CaltexStationComp;
