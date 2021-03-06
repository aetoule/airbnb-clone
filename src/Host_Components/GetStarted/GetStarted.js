import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHostMaxGuests, getHostCity } from '../../redux/reducer';
import './GetStarted.css';

export class GetStarted extends Component {

  handleChangeGuests(event) {
    this.props.getHostMaxGuests(event.target.value)
  }

  handleChangeCity(event) {
    this.props.getHostCity(event.target.value)
  }
  render() {
    return (
      <div className="getStarted-container">
        <div className="getStarted-left-side-container">
          <h5 className="lets-get-started-text">Let's get started listing your space.</h5>
          <h3 className="host-step-number-text">STEP 1</h3>
          <h2 className="what-kind-of-place-text">What kind of place do you have?</h2>
          <select value={this.props.hostMaxGuests} ref='hostMaxGuests' onChange={(e) => this.handleChangeGuests(e)} placeholder="Select maximum guests allowed">
            <option value="">Select maximum guests allowed</option>
            <option value="1">A house for 1 guest</option>
            <option value="2">A house for 2 guests</option>
            <option value="3">A house for 3 guests</option>
            <option value="4">A house for 4 guests</option>
            <option value="5">A house for 5 guests</option>
          </select>

          <select value={this.props.hostCity} ref='hostCity' onChange={(e) => this.handleChangeCity(e)} placeholder="Select city">
            <option value="">Select a City</option>
            <option value="Phoenix">Phoenix</option>
            <option value="Flagstaff">Flagstaff</option>
            <option value="Sedona">Sedona</option>
            <option value="Tucson">Tucson</option>
            <option value="Williams">Williams</option>
          </select>

            {this.props.hostMaxGuests && this.props.hostCity ?
              <Link to="/location">
                <button className="getStarted-next-btn">Continue</button>
              </Link>
              :
              <Link to="/location">
                <button className="getStarted-next-btn" disabled>Continue</button>
              </Link>
            }
        </div>
        <div className="getStarted-right-side-container">
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  const { hostMaxGuests, hostCity } = state;
  return {
    hostMaxGuests,
    hostCity
  }
}

export default connect(mapStateToProps, { getHostMaxGuests, getHostCity })(GetStarted)

