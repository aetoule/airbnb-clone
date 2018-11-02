import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getHostAddress, getHostLat, getHostLong} from '../../redux/reducer';
import Geocode from 'react-geocode';
import './PlaceLocation.css';

export class PlaceLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      streetAddress: '',
      city: '',
      zip: ''
    }
  }

  componentDidMount() {
    Geocode.setApiKey("AIzaSyA_8FxS5bXfNmdj7sTzhxqeGyYGxGQq-y0");
    Geocode.enableDebug();
  }

  handleAddress = event => {
    this.setState({ 
      streetAddress: event 
    });
    console.log(this.state)
  }

  handleCity = event => {
    this.setState({ 
      city: event 
    });
    console.log(this.state)
  }

  handleZip = event => {
    this.setState({ 
      zip: event 
    });
    console.log(this.state)
  }
  handleGoBack = () => {
    this.props.history.goBack();
  }

  handleSubmitAddress(streetAddress, city, zip) {
    let addressFormat = streetAddress + ' ' + city + ' AZ ' + zip
    console.log(addressFormat)
    this.getGeocode(addressFormat)
    this.props.getHostAddress(addressFormat)
  }

  // Get latidude & longitude from address.
  getGeocode = (addressFormat) => {
    Geocode.fromAddress(addressFormat).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          this.props.getHostLat(lat);
          this.props.getHostLong(lng);

        },
        error => {
          console.error('err',error);
        }
    );
  }

  render() {
    const {streetAddress, city, zip} = this.state;
    const state = 'AZ';
    const country = 'United States';
    return (
      <div className="host-placelocation-container">
        <div className="host-placelocation-right-side-container">
          <h5 className="placelocation-header">Where's Your Place Located?</h5>
          <h2 className="placelocation-input-header">Country / Region</h2>
          <input className="gray-input-box" readOnly value={country}/>
          <h2 className="placelocation-input-header">Street Address</h2>
          <input className="yellow-input-box" type="text" placeholder="e.g. 123 Main St." value={streetAddress} onChange={(e) =>this.handleAddress(e.target.value)}/>
          <div className="city-and-state-container">
            <div className="city-title-and-box-container">
              <h2 className="placelocation-input-header">City</h2>
              <input className="gray-input-box" type="text" value={city} onChange={(e) =>this.handleCity(e.target.value)}/>
            </div>
            <div className="state-title-and-box-container">
              <h2 className="placelocation-input-header">State</h2>
              <input className="gray-input-box" readOnly value={state}/>
            </div>
          </div>
          <h2 className="placelocation-input-header">Zip Code</h2>
          <input className="yellow-input-box" type="text" value={zip} onChange={(e) =>this.handleZip(e.target.value)}/> 
          <hr className="line"></hr>
          <div className="back-and-next-btns">
            <button className="host-goback-link" onClick={() => this.handleGoBack()}>Back</button>

            {streetAddress && city && zip 
            ?
            <Link to="/upload-photos">
              <button className="host-continue-btn" onClick={() => this.handleSubmitAddress(streetAddress, city, zip)}>Next</button>
            </Link>
            :
            <Link to="/upload-photos">
              <button className="host-continue-btn"  disabled onClick={() => this.handleSubmitAddress(streetAddress, city, zip)}>Next</button>
            </Link>
          }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {hostAddress, hostLat, hostLong} = state;
  return {
    hostAddress,
    hostLat,
    hostLong
  }
}

export default connect (mapStateToProps, {getHostAddress, getHostLat, getHostLong}) (PlaceLocation);
