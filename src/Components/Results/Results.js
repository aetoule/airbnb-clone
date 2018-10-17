import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAllHomes, getCityHomes } from '../../redux/reducer';
import { Link } from "react-router-dom";


class Results extends Component {
  state = {

  }

  componentDidMount() {
    // this.getHomes()
    this.getResults()

  }

  // getHomes() {
  //   axios.get('/api/homes').then(res => {
  //     this.props.getAllHomes(res.data)
  //   })
  //     .catch(err => {
  //       console.log('err', err)
  //     })
  // }

  getResults() {
    axios.get('/api/home-results').then(res => {
      this.props.getCityHomes(res.data)
    })
      .catch(err => {
        console.log('err', err)
      })
  }

  render() {
    const { cityHomes } = this.props
    console.log(cityHomes);
    const mappedHomes = cityHomes.map(home => {
      console.log(home.home_id);

      return (
        <div key={home.home_id}>
          <div>
            {home.imgs.map(img => {
              console.log(img.main);
              console.log(img.img_url);
              return img.main ?
                <Link to={`/results/${home.home_id}`}>
                  <img src={img.img_url} alt="homes main image" />
                </Link>
                : ""
            })}
          </div>
          <div>
            <h5>
              {home.max_guests} Guests
            </h5>
            <h4>
              {home.home_name}
            </h4>
            <h5>
              ${home.price} per night
            </h5>
          </div>
        </div>
      )
    })


    return (
      <div className="Results">
        <div className='users-dates'>
          <div>
            start date-end date
        </div>
        </div>
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
