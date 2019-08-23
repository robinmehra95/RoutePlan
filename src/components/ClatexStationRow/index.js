import React from 'react';
import './style.css';
import img2 from './../../img/4444444.png';
import CaltexStationComp from './../CaltexStationComp';

class ClatexStationRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        markerData:props.info
    }
  }



  render() {
    return (
      <div className="station-inner-wrap">
          <div className="col-wrap">
            <div className="left-col">
                <img src={img2} />
            </div>
            <div className="right-col">
                <CaltexStationComp markerData={this.state.markerData}/>
            </div>
          </div>
      </div>

      );
  }
}

export default ClatexStationRow;