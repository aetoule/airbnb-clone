import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class AddDescriptions extends Component {
  render() {
    return (
      <div>
        <h1>Tell Guests About Your Space!</h1>
        <Link to="/name-price">
          <button>Next</button>
        </Link>
      </div>
    )
  }
}

export default AddDescriptions
