import React from 'react';
import './style.css';
import img1 from './../../img/icons_close00.svg';
import img2 from './../../img/icons_print.svg';
import img3 from './../../img/icons_download.svg';
import img4 from './../../img/icons_share.svg';

class ThankYouComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
     
  render() {
    return (
      <div className="thankYouComp-comp-wrap">
        <div class="thank-you-section">
       	<div class="thank-you-container">
				<div class="thank-you-content-wrap">
					<span class="journeyPlanner-close-icon"><img src={img1} alt="Close" onClick={() => this.props.onShowThankYouComp()}/></span>
					<div class="thank-you-content-group">
						<h3>Thank You</h3>
						<p>We’ve received your details and will be in touch shortly.</p>
						<p>In the meantine, continue exploring the Caltex Journey Planner or find out more about the Caltex Starcard Fleet Program. You may also download/print/share your fleet profile.</p>
						<div class="journey-btns-group">
							<button class="journey-btn red">Continue with journey planner</button>
							<button class="journey-btn darkBlue">More on Caltex Starcard</button>
						</div>

						<ul class="print-download-share-list">
							<li class="print-li">
								<img src={img2} alt="" /> Print
							</li>
							<li class="download-li">
								<img src={img3} alt="" /> Download Journey Overview
							</li>
							<li class="share-li">
								<img src={img4} alt="" /> Share
							</li>
						</ul>
					</div>
				</div>
			</div>
      </div>
      </div>
      );
  }
}

export default ThankYouComp;
