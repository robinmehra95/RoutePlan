import React from 'react';
import './style.css';
import img1 from './../../img/icons_close00.svg';

class SpeakToUS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
     
  render() {
    return (
      <div className="spwaktous-comp-wrap">
       <div class="speak-to-us-section">
          <div class="">
            <div class="speak-to-us-container">
              <div class="speakToUs-form-wrap">
                <span class="speakToUs-close-icon"  onClick={() => this.props.onSpeakToUs()}><img src={img1} alt="Close"/></span>
                <div class="speak-to-us-form-group">						
                  <fieldset class="speakToUs-fieldset speakToUs-fieldset-2col">
                    <h6 class="hide-in-mobile">SPEAK TO US</h6>
                    <h3 class="hide-in-mobile">Create another fleet route</h3>
                    <h3 class="show-in-mobile">Personalize a Caltex fleet program for your business</h3>
                    <div class="speakToUs-form-field">
                      <label>Name <span class="field-strike-sign"></span></label>
                      <input class="speakToUs-form-input" type="text" name="start_point" required />
                    </div>
                    <div class="speakToUs-form-field">
                      <label>Email address <span class="field-strike-sign"></span></label>
                      <input class="speakToUs-form-input" type="mail" name="start_point" required />
                    </div>
                  </fieldset>
                  <fieldset class="speakToUs-fieldset speakToUs-fieldset-2col">
                    <div class="speakToUs-form-field">
                      <label>Contact Number</label>
                      <input class="speakToUs-form-input" type="number" name="start_point" placeholder="+65" required/>
                    </div>
                    <div class="speakToUs-form-field">
                      <label>Convenient time for call-back <span class="field-strike-sign"></span></label>
                      <input class="speakToUs-form-input" type="text" name="start_point" required/>
                    </div>
                  </fieldset>
                  <fieldset class="speakToUs-fieldset">
                    <div class="speakToUs-form-field">
                      <label>Message (optional)</label>
                      <textarea></textarea>
                    </div>
                  </fieldset>
                  <fieldset class="speakToUs-fieldset">
                    <div class="speakToUs-form-field checkbox-form-field">
                      <label>
                        <input type="checkbox" name="agree_with_conditions"/>
                        <span>By ticking this box lorem ipsum nascetur ridiculus mus mauris for permission to use information and contact purposes.</span>
                      </label>
                    </div>
                  </fieldset>
                  <div class="speakToUs-btn-group">
                    <input type="submit" value="SUBMIT" class="speakToUs-form-btn" onClick={() => this.props.onShowThankYouComp()}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default SpeakToUS;
