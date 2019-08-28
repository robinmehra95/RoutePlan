import React from 'react';
import './style.css';
import CaltexStationComp from './../CaltexStationComp';
import SmallMapComp from './../SmallMapComp';

class ClatexStationRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        markerData:props.info
    }
  }



  render() {
    const { info }  = this.props;
    return (
      <div className="station-inner-wrap">
          <div className="col-wrap">
            <div className="left-col">
                <SmallMapComp info={info} height="100px" width="100px" zoom={2}/>
            </div>
            <div className="right-col">
                <CaltexStationComp markerData={info} showSidemapComp={this.props.showSidemapComp}/>
            </div>
          </div>
      </div>

      );
  }
}

export default ClatexStationRow;
