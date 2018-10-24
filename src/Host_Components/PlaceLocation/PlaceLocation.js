import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class PlaceLocation extends Component {
  render() {
    return (
      <div>
        <h1>Where's Your Place Located?</h1>
        <Link to="/upload-photos">
          <button>Next</button>
        </Link>
      </div>
    )
  }
}

export default PlaceLocation
