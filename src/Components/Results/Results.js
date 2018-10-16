import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAllHomes, getCityHomes } from '../../redux/reducer';

class Results extends Component {
  state = {

  }

  componentDidMount() {
    this.getHomes()
    this.getResults()
    this.getMainImg()
  }

  getHomes() {
    axios.get('/api/homes').then(res => {
      this.props.getAllHomes(res.data)
    })
      .catch(err => {
        console.log('err', err)
      })
  }

  getResults() {
    axios.get('api/home-results').then(res => {
      this.props.getCityHomes(res.data)
    })
      .catch(err => {
        console.log('err', err)
      })
  }

  getMainImg() {
    axios.get('api/mian-img').then(res => {
      console.log(res.data);

    })
  }

  render() {
    const { cityHomes } = this.props

    let mappedHomes = cityHomes.map(home => {
      return (
        <div key={home.homeid}>
          {/* <img src={} alt="pic of home" /> */}
          <div>{home.address}</div>
          <div>{home.home_name}</div>
          <div>{home.price}</div>
        </div>
      )
    })
    return (
      <div className="Results">
        <div>
          200+ Homes...
        </div>
        {mappedHomes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { homes, cityHomes } = state;
  return {
    homes,
    cityHomes
  }
}

const mapDispatchToProps = {
  getAllHomes,
  getCityHomes
}
export default connect(mapStateToProps, mapDispatchToProps)(Results);
