import React from 'react';
import './style.css';
import img1 from './../../img/truck-jp.png';


class TruckComp extends React.Component {
  constructor(props) {
    super(props);
   
  }



  render() {
    return (
      <div className="truck-comp-wrap">
        	<div className="caltex-journeyPlanner-section">
            <div className="page-center">
              <div className="caltex-journeyPlanner-container">
                <div className="caltex-journeyPlanner-content-wrap">
                  <div className="caltex-journeyPlanner-image">
                    <img src={img1} alt="Caltex Journey Planner"/>
                  </div>
                  <div className="caltex-journeyPlanner-content-group">
                    <h1>Journey planner</h1>
                    <p>At Caltex, we know that managing a fleet can be challenging. The Journey planner manifesto lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="caltex-journeyPlanner-btn">Begin your journey</button>
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
