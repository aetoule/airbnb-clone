import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class UploadPhotos extends Component {
  render() {
    return (
      <div>
        <h1>Set the Scene</h1>
        <h2>Show guests what it looks like</h2>
        <Link to="/description">
          <button>Next</button>
        </Link>
      </div>
    )
  }
}

export default UploadPhotos
