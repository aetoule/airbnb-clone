import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAllHomes, getCityHomes, getCity } from '../../redux/reducer';
import { Link } from "react-router-dom";
import Search from '../Search/Search';
import './Results.css';

class Results extends Component {

  state = {
    searchToggle: false
  }

  componentDidMount() {
    this.getHomes()
    this.getResults()


  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.getResults(this.props.city)
    }
    if (this.props.endDate !== prevProps.endDate & this.props.endDate != false) {
      this.setState({
        searchToggle: false
      })
    }
  }

  // componentDidUpdate(prevProps) {

  // }

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
        console.log(e);

        console.log(e.imgs.length);
        if (e.imgs.length !== 0) {
          return (
            <div className='mappedList' key={e.homeid}>
              <div>
                <Link to={`/results/${e.homeid}`}>
                  <img className='results-images' src={e.imgs[0].img_url} alt="homes main image" />
                </Link>


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
                <div className="five-stars">
                  <div className='one-star'></div>
                  <div className='one-star'></div>
                  <div className='one-star'></div>
                  <div className='one-star'></div>
                  <div className='one-star'></div>
                  <h6 className="ratings-number-oneHome">751</h6>
                </div>
              </div>
            </div>
          )
        } else {
          return (
            <div className='mappedList' key={e.homeid}>
              <div>
                <Link to={`/results/${e.homeid}`}>
                  <img className='results-images' src='https://files.slack.com/files-pri/T039C2PUY-FDQFY86A3/defaultimage.png' alt="homes main image" />
                </Link>




                <h5>
                  {e.max_guests} Guests
              </h5>
                <h4>
                  {e.home_name}
                </h4>
                <h5>
                  ${e.price} per night
              </h5>
                <div className="five-stars">
                  <div className='one-star'></div>
                  <div className='one-star'></div>
                  <div className='one-star'></div>
                  <div className='one-star'></div>
                  <div className='one-star'></div>
                  <h6 className="ratings-number-oneHome">751</h6>
                </div>
              </div>
            </div>
          )
        }
      })
      : ''
    const { cityHomes } = this.props
    const mappedHomes = cityHomes.map(e => {
      if (e.imgs.length !== 0) {
        console.log(e);

        return (
          <div className='mappedList' key={e.homeid}>
            <div>
              <Link to={`/results/${e.homeid}`}>
                <img className='results-images' src={e.imgs[0].img_url} alt="homes main image" />
              </Link>




              <h5>
                {e.max_guests} Guests
            </h5>
              <h4>
                {e.home_name}
              </h4>
              <h5>
                ${e.price} per night
            </h5>
              <div className="five-stars">
                <div className='one-star'></div>
                <div className='one-star'></div>
                <div className='one-star'></div>
                <div className='one-star'></div>
                <div className='one-star'></div>
                <h6 className="ratings-number-oneHome">751</h6>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className='mappedList' key={e.homeid}>
            <div>
              <Link to={`/results/${e.homeid}`}>
                <img className='results-images' src='https://files.slack.com/files-pri/T039C2PUY-FDQFY86A3/defaultimage.png' alt="homes main image" />
              </Link>

              <h5>
                {e.max_guests} Guests
            </h5>
              <h4>
                {e.home_name}
              </h4>
              <h5>
                ${e.price} per night
            </h5>
              <div className="five-stars">
                <div className='one-star'></div>
                <div className='one-star'></div>
                <div className='one-star'></div>
                <div className='one-star'></div>
                <div className='one-star'></div>
                <h6 className="ratings-number-oneHome">751</h6>
              </div>
            </div>
          </div>
        )
      }


    })

    const dates = this.props.endDate ?
      <div>{this.props.startDate._d.getMonth() + 1}/{this.props.startDate._d.getDate()}/{this.props.startDate._d.getFullYear()} - {this.props.endDate._d.getMonth() + 1}/{this.props.endDate._d.getDate()}/{this.props.endDate._d.getFullYear()}</div> :
      "Dates"

    const searchBar = this.state.searchToggle ?
      <div>
        <button className='results-search-btn' onClick={() => this.setState({ searchToggle: false })}>X</button>
        <Search />
      </div> :
      <div>
        <button className='results-search-btn' onClick={() => this.setState({ searchToggle: true })}>{dates}</button>
      </div>

    const listingsTitle = this.props.city ?
      <div>
        <h1>Homes in {this.props.city}</h1>
      </div> :
      <div>
        <h1>Top-rated homes</h1>
      </div>

    return (
      <div className="Results">

        <div className='users-dates'>
          <div className='results-searchbar'>
            {searchBar}
          </div>
        </div>
        <div>
          {listingsTitle}
          200+ Homes...
        </div>
        <div className='results-image-container'>
          {home}
          {mappedHomes}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { homes, cityHomes, city, startDate, endDate } = state;
  return {
    homes,
    cityHomes,
    city,
    startDate,
    endDate,
  }
}

const mapDispatchToProps = {
  getAllHomes,
  getCityHomes,
  getCity
}
export default connect(mapStateToProps, mapDispatchToProps)(Results);
