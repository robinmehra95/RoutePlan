/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import './style.css';
import img1 from './../../img/btns_carousel-arrow-red-white.svg'
import img2 from './../../img/icons_edit_white.svg'
import img3 from './../../img/icons_start_over.svg'
import img4 from './../../img/icon_journey planner_route.svg'
import img5 from './../../img/icon_journey planner_route(1).svg'
import img6 from './../../img/icon_journey planner_route(2).svg'
import img7 from './../../img/icons_print.svg'
import img8 from './../../img/icons_download.svg'
import img9 from './../../img/icons_share.svg'

class StartOver extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
		showInfo: this.props.show
	}
  }

  showHideInfo = () => {
	this.setState({
		showInfo : !this.state.showInfo
	})
	this.props.hideRouteList()
  }

  showFunctionWrap = () => {
	this.setState({
		showInfo : false
	})
	this.props.showFunction()
  }

  render() {
    return (
      <div>
        <div className="displaying-routes-container">
				<div className="clearfix displaying-route-topSection">
					<div className="displayingRoute-topSec-row">
						<div className="displayingRoute-topSec-col left-col">
							<h6>Displaying 3 Routes</h6>
						</div>
						<div className="displayingRoute-topSec-col center-col">
							<img src={img1} alt="Arrow" onClick={() => this.showHideInfo()} />
						</div>
						<div className="displayingRoute-topSec-col right-col">
							<ul className="user-route-change-list">
								<li onClick={() => this.showFunctionWrap()}>
									<img src={img2} alt="Add and Edit Route" /> <span>Add / Edit Route</span>
								</li>
								<li onClick={() => this.showFunctionWrap()}>
									<img src={img3} alt="Start Over"/> <span>Start Over</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{this.state.showInfo && <div className="clearfix displaying-route-bottomSection">
					<div className="displayingRoute-btSec-row">
						<div className="displayingRoute-btSec-col left-col">
							<h5>Journey Overview</h5>
							<ul className="journey-option-list">
								<li>
									<p>Vehicles</p>
									<h3>52 <img src={img4} alt=""  /></h3>
								</li>
								<li>
									<p>Routes</p>
									<h3>3 <img src={img5} alt=""  /></h3>
								</li>
								<li>
									<p>Caltex Stations</p>
									<h3>32 <img src={img6} alt=""  /></h3>
								</li>
							</ul>
							<p>52 of my vehicles take these 3 routes with a total of 32 Caltex stations at my service.</p>
							<a href="#" className="see-fullList-link">See full list of stations 
             				 <img src="" alt="" /></a>
						</div>
						<div className="displayingRoute-btSec-col center-col">
							<h5>Total Daily Fleet Mileage</h5>
							<h3>178,140km</h3>
							<ul className="fleet-mileage-list">
								<li>A Caltex station every 100km on average</li>
								<li>A 24-hour Caltex service station every 100km</li>
								<li>Fuel with Techron that cleans my fleet’s engine as it runs</li>
								<li>Flexible fleet credit management with Starcard fleet program</li>
								<li>Starcard fleet program that provides transparent and accountable spending</li>
							</ul>
							<ul className="print-download-share-list">
								<li className="print-li">
									<img src={img7} alt=""  /> Print
								</li>
								<li className="download-li">
									<img src={img8} alt=""  /> Download Journey Overview
								</li>
								<li className="share-li">
									<img src={img9} alt=""  /> Share
								</li>
							</ul>
						</div>
						<div className="displayingRoute-btSec-col right-col">
							<div className="think-make-good-fit-group">
								<h3>Think we make a good fit?</h3>
								<p>Personalise a Caltex fleet program for your business.</p>
								<button className="displayingRoute-btn">Speak to us</button>
							</div>
						</div>
					</div>
				</div>}
			</div>
		
      </div>
      );
  }
}

export default StartOver;
