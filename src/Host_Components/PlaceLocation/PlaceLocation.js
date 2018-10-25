import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getHostAddress, getHostLat, getHostLong} from '../../redux/reducer';
import Geocode from "react-geocode";

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
          console.log('reached inside of Geocode.fromAddress promise')
          const { lat, lng } = response.results[0].geometry.location;
          this.props.getHostLat(lat);
          this.props.getHostLong(lng);
          console.log(lat);
          console.log(typeof lat);
          console.log(lng);
        },
        error => {
          console.error('err',error);
        }
    );
  }

  render() {
    const {streetAddress, city, zip} = this.state;
    const state = 'AZ';
    return (
      <div>
        <h1>Where's Your Place Located?</h1>
        <h2>Street Address</h2>
        <input type="text" value={streetAddress} onChange={(e) =>this.handleAddress(e.target.value)}/>
        <h2>City</h2>
        <input type="text" value={city} onChange={(e) =>this.handleCity(e.target.value)}/>

        <h2>Zip Code</h2>
        <input type="text" value={zip} onChange={(e) =>this.handleZip(e.target.value)}/> 
        <h2>State</h2>
        <input readOnly value={state}/>
        
        {streetAddress && city && zip 
        ?
        <Link to="/upload-photos">
          <button onClick={() => this.handleSubmitAddress(streetAddress, city, zip)}>Next</button>
        </Link>
        :
        <Link to="/upload-photos">
          <button disabled onClick={() => this.handleSubmitAddress(streetAddress, city, zip)}>Next</button>
        </Link>
      }
        
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
