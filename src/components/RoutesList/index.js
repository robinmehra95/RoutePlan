import React from 'react';
import './style.css';
import img1 from './../../img/icons_close00.svg'
import img2 from './../../img/icons_red_edit@1x.svg'
import img3 from './../../img/icons_remove@1x.svg'
import img4 from './../../img/icons_travel_arrow@1x.svg'
import img5 from './../../img/routegraphic@3x.png'

class RoutesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: false,
      showRoutes: false
    }
  }

  render() {
    return (
      <div className="journeyPlanner-popup-container">
          <span className="journeyPlanner-close-icon">
            <img src={img1} alt="Close" onClick={() => this.props.hideRouteList()} />
          </span>
				<div className="clearfix journeyPlanner-row">
        {!this.state.showRoutes && <div className="journeyPlanner-col left-col">
					            	<h3>Your Routes</h3>
						<div className="journey-list">
							<div className="journey-list-items-group">
								<div className="clearfix journey-list-item">
									<div className="journey-series">A</div>
									<div className="journey-points">
										<span className="journey-start-point">Pathum Wan</span>
										<span className="journey-travel-icon">
                        <img src={img4} alt="Travel" /></span>
										<span className="journey-end-point">Pattaya City</span>
									</div>
									<div className="journey-edit-remove">
										<span className="journey-edit">
                        <img src={img2} alt=""/>
                    </span>
										<span className="journey-remove">
                        <img src={img3} alt=""/>
                    </span>
									</div>
								</div>
							</div>
						</div>
						<input type="submit" name="journey_see_my_routes" value="See my routes" className="journey-see-routes-btn"/>
					</div>}
					
         {this.state.showRoutes && <div className="journeyPlanner-col left-col">
						<h3>Your Routes</h3>
						<div className="giveItGo-group">
							<h3>Give it a go.</h3>
							<p>You don’t have any routes, begin by adding in your first fleet route.</p>
							<img src={img5} width="365" height="285" alt="Give It Go | Route"  className="map-markers"/>
						</div>
					</div>}
          
          
          <div className="journeyPlanner-col right-col" >
						<form method="post" className="journeyPlanner-form">
							<fieldset className="create-route-fieldset">
								<h3>Create another fleet route</h3>
								<div className="journeyPlanner-form-field">
									<label>Start Point <span className="field-strike-sign"></span></label>
									<input className="jp-form-input" type="text" name="start_point" placeholder="Pathum Wan" required=""/>
								</div>
								<div className="journeyPlanner-form-field">
									<label>End Point <span className="field-strike-sign"></span></label>
									<input className="jp-form-input" type="text" name="end_point" placeholder="Pattaya City" required=""/>
								</div>
							</fieldset>
							<fieldset className="route-details-fieldset">
								<h3>Your fleet route details</h3>
								<div className="journeyPlanner-form-field">
									<p>
										<strong>In an average </strong>
										<select>
											<option default="">month</option>
											<option>quarter</option>
											<option>half year</option>
											<option>year</option>
										</select>
										<strong>, </strong>
										<input type="text" name="fleet_take_duration" className="fleet-take-duration" placeholder="24"/>
										<strong>vehicles in my fleet take</strong>
									</p>
								</div>
								<div className="journeyPlanner-form-field">
									<p>
										<strong>this route for</strong>
										<input type="text" name="fleet_take_duration_repeat" className="fleet-take-duration" placeholder="30"/>
										<strong>times.</strong>
									</p>
								</div>
							</fieldset>
							  <input className="add-journeyRoute-btn" type="submit" name="add_route" value="Add Route"/>
						</form>
					</div>
				</div>
			</div>
      );
  }
}

export default RoutesList;
