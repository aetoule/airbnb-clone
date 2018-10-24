import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class GetStarted extends Component {
  render() {
    return (
      <div>
        <h1>Let's Get Started!</h1>
        <Link to="/location">
          <button>Next</button>
        </Link>
      </div>
    )
  }
}

export default GetStarted

