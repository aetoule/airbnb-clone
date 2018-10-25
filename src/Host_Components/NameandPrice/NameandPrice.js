import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHostHomeName, getHostHomePrice, getAllHomesWithoutImgs, getHostNewHome } from '../../redux/reducer';
import axios from 'axios'

export class NameandPrice extends Component {
  constructor() {
    super()
    this.state = {

    }
    this.getHomes = this.getHomes.bind(this)
    this.postHostsHome = this.postHostsHome.bind(this)
    this.addImgsToHostHome = this.addImgsToHostHome.bind(this)
    this.setNewHome = this.setNewHome.bind(this)
  }



  getHomes() {
    axios.get('/api/getallhomes').then(res => {
      this.props.getAllHomesWithoutImgs(res.data)
      this.setNewHome()
    })
      .catch(err => {
        console.log('err', err)
      })
  }



  postHostsHome() {
    const { hostHomeName,
      hostHomePrice,
      hostMaxGuests,
      hostCity,
      hostAddress,
      hostLat,
      hostLong,
      hostDescribeMain,
      hostDescribeSpace,
      hostDescribeGuestAccess,
      hostDescribeInteraction,
      hostDescribeOther } = this.props
    return axios.post('/api/myhomes', {
      home_name: hostHomeName,
      price: hostHomePrice,
      max_guests: hostMaxGuests,
      describe_main: hostDescribeMain,
      describe_space: hostDescribeSpace,
      describe_guest_access: hostDescribeGuestAccess,
      describe_interaction_with_guests: hostDescribeInteraction,
      describe_other_things_to_note: hostDescribeOther,
      address: hostAddress,
      city: hostCity,
      lat: hostLat,
      long: hostLong
    }).then(res => {
      this.getHomes()

      console.log(res.data);
      console.log('hi');


    })
      .catch(error => {
        console.log(error);
      })
  }

  addImgsToHostHome() {


    this.props.hostImgs.map(img => {
      console.log(img);

      console.log(this.props.hostNewHome);

      axios.post('/api/myimgs', {
        img_url: img,
        home_id: this.props.hostNewHome.homeid
      }).then(res => {
        console.log('this is imgs!!!');

        console.log(res.data);

      }).catch(error => {
        console.log(error);

      })
    })



  }

  setNewHome() {

    this.props.homesWithoutImgs.map(home => {
      console.log(home.lat);
      console.log(this.props.hostLat);


      if (home.lat == this.props.hostLat) {
        console.log(home);
        this.props.getHostNewHome(home)


      } else {
        console.log('blag');

      }
    })

    this.addImgsToHostHome()


  }

  handleHomeName = (event) => {
    this.props.getHostHomeName(event)
  }

  handleHomePrice = (event) => {
    this.props.getHostHomePrice(event)
  }

  render() {


    const { hostHomeName, hostHomePrice } = this.props
    console.log(this.props.hostNewHome);

    return (
      <div>

        <h1>Name Your Place</h1>
        <input type="text" value={hostHomeName} onChange={(e) => this.handleHomeName(e.target.value)} />

        <h2>Price Your Place</h2>
        <input type="text" value={hostHomePrice} onChange={(e) => this.handleHomePrice(e.target.value)} />

        {hostHomeName && hostHomePrice ?
          <Link to="/">
            <button onClick={() => this.postHostsHome()}>Finish</button>
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
  const {
    hostHomeName,
    hostHomePrice,
    hostMaxGuests,
    hostCity,
    hostAddress,
    hostLat,
    hostLong,
    hostDescribeMain,
    hostDescribeSpace,
    hostDescribeGuestAccess,
    hostDescribeInteraction,
    hostDescribeOther,
    homesWithoutImgs,
    hostImgs,
    hostNewHome } = state;
  return {
    hostHomeName,
    hostHomePrice,
    hostMaxGuests,
    hostCity,
    hostAddress,
    hostLat,
    hostLong,
    hostDescribeMain,
    hostDescribeSpace,
    hostDescribeGuestAccess,
    hostDescribeInteraction,
    hostDescribeOther,
    homesWithoutImgs,
    hostImgs,
    hostNewHome
  }
}

export default connect(mapStateToProps, { getHostHomeName, getHostHomePrice, getAllHomesWithoutImgs, getHostNewHome })(NameandPrice)
