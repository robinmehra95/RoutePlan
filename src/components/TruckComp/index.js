import React from 'react';
import './style.css';
import img1 from './../../img/truck-jp.png';


class TruckComp extends React.Component {
  constructor(props) {
    super(props);
  };





    render() {
      const Config = window.config;
        return (
      <div className="truck-comp-wrap">
        	<div className="caltex-journeyPlanner-section">
            <div className="page-center">
              <div className="caltex-journeyPlanner-container">
                <div className="caltex-journeyPlanner-content-wrap">
                  <div className="caltex-journeyPlanner-image">
                    <img src={Config.general.overlayImage} alt="Caltex Journey Planner"/>
                  </div>
                  <div className="caltex-journeyPlanner-content-group">
                    <h1>{Config.general.heading}</h1>
                    <p>{Config.general.description}</p>
                    <button className="caltex-journeyPlanner-btn" onClick={this.props.closeTruckComp} >{Config.general.ctaLabel}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      );
  }
}

export default TruckComp;
