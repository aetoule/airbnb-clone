import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getHostHomeName, getHostHomePrice} from '../../redux/reducer';

export class NameandPrice extends Component {

  handleHomeName = (event) => {
    this.props.getHostHomeName(event)
  }

  handleHomePrice = (event) => {
    this.props.getHostHomePrice(event)
  }

  render() {
    const {hostHomeName, hostHomePrice} = this.props
    return (
      <div>
        <h1>Name Your Place</h1>
        <input type="text" value={hostHomeName} onChange={(e) =>this.handleHomeName(e.target.value)}/>

        <h2>Price Your Place</h2>
        <input type="text" value={hostHomePrice} onChange={(e) =>this.handleHomePrice(e.target.value)}/>

        {hostHomeName && hostHomePrice ?
          <Link to="/">
          <button>Finish</button>
          </Link>
          :
          <Link to="/">
          <button disabled>Finish</button>
          </Link>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {hostHomeName, hostHomePrice} = state;
  return {
    hostHomeName, hostHomePrice
  }
}

export default connect (mapStateToProps, {getHostHomeName, getHostHomePrice}) (NameandPrice)
