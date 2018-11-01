import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAllHomes, getCityHomes, getCity } from '../../redux/reducer';
import { Link } from "react-router-dom";
import Search from '../Search/Search';

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
        console.log(e);

        console.log(e.imgs.length);
        if (e.imgs.length !== 0) {
          return (
            <div key={e.homeid}>
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
              </div>
            </div>
          )
        } else {
          return (
            <div key={e.homeid}>
              <div>
                <Link to={`/results/${e.homeid}`}>
                  <img className='results-images' src='https://files.slack.com/files-pri/T039C2PUY-FDQFY86A3/defaultimage.png' alt="homes main image" />
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
          <div key={e.homeid}>
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
            </div>
          </div>
        )
      } else {
        return (
          <div key={e.homeid}>
            <div>
              <Link to={`/results/${e.homeid}`}>
                <img className='results-images' src='https://files.slack.com/files-pri/T039C2PUY-FDQFY86A3/defaultimage.png' alt="homes main image" />
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
            </div>
          </div>
        )
      }


    })


    return (
      <div className="Results">

        <div className='users-dates'>
          <div>
            <Search> </Search>
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
