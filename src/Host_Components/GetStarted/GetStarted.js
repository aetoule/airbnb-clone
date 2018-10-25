import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class GetStarted extends Component {
  render() {
    return (
      <div>
        <h1>Let's Get Started!</h1>
        <h3>What kind of place?</h3>
        <h5>Guests</h5>
        <select value='' ref='guests' placeholder="max number of guests">
          <option value="">Max number of Guests</option>
          <option value='1'>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <h5>Location</h5>
        <select value='' ref='city' placeholder="select a city">
          <option value="">Select a City</option>
          <option value="Phoenix">Phoenix</option>
          <option value="Flagstaff">Flagstaff</option>
          <option value="Tucson">Tucson</option>
          <option value="Williams">Williams</option>
        </select>
        <Link to="/location">
          <button>Next</button>
        </Link>
      </div>
    )
  }
}

export default GetStarted

