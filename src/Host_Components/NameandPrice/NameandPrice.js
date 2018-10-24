import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NameandPrice extends Component {
  render() {
    return (
      <div>
        <h1>Name Your Place</h1>
        <h2>Price Your Place</h2>
        <Link to="/">
          <button>Finish</button>
        </Link>
      </div>
    )
  }
}

export default NameandPrice
