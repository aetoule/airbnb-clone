import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAllHomes, getCityHomes, getCity } from '../../redux/reducer';
import { Link } from "react-router-dom";
import Search from '../Search/Search'

class Results extends Component {
  state = {

  }

  componentDidMount() {
    this.getHomes()
    this.getResults()


  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.getResults(this.props.city)
    }
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
    axios.post('/api/homes-results', { city: this.props.city }).then(res => {

      this.props.getCityHomes(res.data)
    })
      .catch(err => {
        console.log('err', err)
      })
  }

  render() {

    const home = !this.props.city ?
      this.props.homes.map(e => {
        return (
          <div key={e.home_id}>
            <div>
              {e.imgs.map(img => {

                return img.main ?
                  <Link to={`/results/${e.home_id}`}>
                    <img className='results-images' src={img.img_url} alt="homes main image" />
                  </Link>
                  : ""
              })}
            </div>
            <div>
              <h5>
                {e.max_guests} Guests
              </h5>
              <h4>
                {e.home_name}
              </h4>
              <h5>
                ${e.price} per night
              </h5>
            </div>
          </div>
        )
      })
      : ''
    const { cityHomes } = this.props
    const mappedHomes = cityHomes.map(home => {

      return (
        <div key={home.home_id}>
          <div>
            {home.imgs.map(img => {

              return img.main ?
                <Link to={`/results/${home.home_id}`}>
                  <img className='results-images' src={img.img_url} alt="homes main image" />
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
            <Search  > </Search>
            start date-end date
        </div>
        </div>
        <div>
          200+ Homes...
        </div>
        {home}
        {mappedHomes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { homes, cityHomes, city } = state;
  return {
    homes,
    cityHomes,
    city
  }
}

const mapDispatchToProps = {
  getAllHomes,
  getCityHomes,
  getCity
}
export default connect(mapStateToProps, mapDispatchToProps)(Results);
