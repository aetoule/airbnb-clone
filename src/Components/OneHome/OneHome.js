import React, { Component } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import './one-home.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getStartDate, getEndDate, getTotal, getTripLength, getAllHomes } from '../../redux/reducer';
import TakeMoney from '../StripeCheckout';
import ImageGallery from 'react-image-gallery';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import Search from '../Search/Search';
import {compose} from 'redux';

class OneHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeInfo: {},
            allHomesInCity: [],
            similarHomes: [],
            currentHomeImgList: [],
            activeMarker: {},
            selectedPlace: {},
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
    }
    componentDidMount() {
        this.getHouse()
        this.getSimilarHomes()
        this.getTripDuration()
        this.setState({
            searchToggle: false
        })
    }
    
    getHouse() {
       axios.get(`/api/home/${this.props.match.params.id}`)
            .then(res => {
                console.log('getHouse with params fired')
                this.setState({
                    homeInfo: res.data[0]
                })
        })  
    }

    getSimilarHomes() {
        axios.get('/api/homes')
            .then(res => {
                let allHomesWithCurrentHome = res.data
                console.log(res.data[this.props.match.params.id])
                console.log(this.props.match.params.id)
                let allSimilarHomes = allHomesWithCurrentHome
                const idNumber = allSimilarHomes.findIndex(e => {
                    console.log(e)
                    return e.homeid == this.props.match.params.id
                })
                // right now the get one home is not getting the image array. So I'm using this endpoint to get the home info for this house to get access to the image array
                console.log(res.data[idNumber].imgs)
                let currentHomeImageArray;
                if (res.data[idNumber].imgs.length !== 0) {
                    currentHomeImageArray = res.data[idNumber].imgs
                } else {
                    currentHomeImageArray = [{img_url: 'https://files.slack.com/files-pri/T039C2PUY-FDQFY86A3/defaultimage.png'}]
                }

                console.log(currentHomeImageArray)

                // currentHomeImageArray = res.data[idNumber].imgs
                // allSimilarHomes.splice(idNumber, 1)
                this.setState({
                    // similarHomes: allSimilarHomes,
                    currentHomeImgList: currentHomeImageArray
                })
            })
    }

    getTripDuration() {
        axios.post('/api/getdays', { start_date: this.props.endDate, end_date: this.props.startDate }).then(res => {
            this.props.getTripLength(res.data[0].date_part)
        })

    }
    onMarkerClick = (props, marker, e) => {
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
        });
      }
    onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
        this.setState({
        activeMarker: null
        });
    }
    }

    render() {
        const ToggleSearchButton = this.state.searchToggle === true ? <div>
            <button onClick={() => this.setState({ searchToggle: false })}>Cancel</button>
            <Search></Search>
        </div> :
            ''
        const { home_name, price, max_guests, describe_space, describe_other_things_to_note, describe_main, describe_interaction_with_guests, describe_guest_access, city, address, lat, long } = this.state.homeInfo;
        // mapping over to get the house names of other similar homes
        let mappedSimilarListings = this.state.similarHomes.map(home => {
            return (
                <p><b>{home.home_name}</b></p>
            )
        })

        // let totalPrice = this.state.serviceFee + this.state.tax + (this.props.tripLength * this.state.homeInfo.price);
        // let totalCents = totalPrice * 100
        // // this.props.getTotal(totalCents);
        // console.log(totalCents)
        // this.props.getTotal(totalCents)

        let pushedImgs = this.state.currentHomeImgList.map(img => {
            return img.img_url;
        })
        let pushedWithText = [];
        for (let i = 0; i < pushedImgs.length; i++) {
            // let obj = {src: pushedImgs[i]}
            let obj = { original: pushedImgs[i] }
            pushedWithText.push(obj)
        }

        const style = {
            // height: '300px',
            // width: '300px',
            // top: '40%',
    
            // // z-index: 3;
            // position: 'relative',
            // padding: '0px',
            // // border-width: '0px',
            // // margin: '50px',
            // margin: '0 auto',
            // left: '0px',
            // top: '0px',

            position: 'relative',
            left: '-41px',
            /* right: 0px; */
            /* bottom: 0px; */
            // top: '20%',
            /* top: -9%; */
            height: '310px',
            width: '310px',
            /* padding: 0px; */
            /* margin: 0px auto; */
            display: 'inherit',
            overflow: 'hidden',
            zIndex: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
        } 
        let latNum = parseFloat(lat)
        let lngNum = parseFloat(long)
        const coords = { lat: latNum, lng: lngNum}
        const googleMap =
        <div><Map google={this.props.google} zoom={14}
        onClick = { this.onMapClick }
        initialCenter={coords}
        center={coords}
        style={style}
        resetBoundsOnResize
        >
        <Marker onClick={this.onMarkerClick}
        name={'Current location'}
        position = {coords}
        />
        </Map></div>
        console.log('currentHomeimgarry', this.state.currentHomeImgList)
        return (
            <div className="one-home-entire-container">
                <div className="search-bar-header">
                </div>
                <div className="oneHome-img-gallery">
                    <ImageGallery items={pushedWithText} />
                </div>
                <div className="oneHome-left-and-right-container">
                    <div className="oneHome-left-side-container">
                        <h1>{home_name}</h1>
                        <p>{city}  ·  {max_guests} guests</p>
                        <div className="small-space"></div>
                        <p>{describe_main}</p>
                        <h3>The space</h3>
                        <p>{describe_space}</p>
                        <h3>Guest access</h3>
                        <p>{describe_guest_access}</p>
                        <h3>Interaction with guests</h3>
                        <p>{describe_interaction_with_guests}</p>
                        <h3>Other things to note</h3>
                        <p>{describe_other_things_to_note}</p>
                        <hr></hr>
                        {/* <h3>Amenities</h3>

                        <h5>Similar listings</h5>
                        {mappedSimilarListings} */}
                        {/* {mappedImagesOfCurrHouse} */}
                    </div>
                    <h5>The neighborhood</h5>
                    <p>This home is located in <b>{city}</b></p>
                    {/* <GoogleMap latitude={lat} longitude={long} /> */}
                    <div className="outside-map-container">
                    <div className="map-container">
                            {googleMap}
                    </div>
                </div>
                    <div className="oneHome-right-side-container">
                        <h5>${price} per night</h5>
                        <hr></hr>
                        <h6>{this.props.total}</h6>
                        <div className="trip-dates-box">
                            {/* <p>{startDateString} to {endDateString}</p> */}
                        </div>

                        <div className="trip-costs-list">
                            {/* <div className="list-price-times-days">
                                <p>${price} x {this.state.tripLength} nights</p>
                            </div>
                            <div className="list-cleaning-fee">
                                <p>${price} x {this.state.tripLength} nights</p>
                            </div>
                            <div className="list-service-fee">
                                <p>${price} x {this.state.tripLength} nights</p>
                            </div>
                            <div className="list-tax-fee">
                                <p>${price} x {this.state.tripLength} nights</p>
                            </div>
                            <div className="list-total">
                                <p>${price} x {this.state.tripLength} nights</p>
                            </div> */}

                            <TakeMoney />
                        </div>

                    </div>
                    {!this.props.endDate
                        ?
                        <div>
                            <footer>
                                <button onClick={() => this.setState({ searchToggle: true })}>Select Dates</button>
                            </footer>
                            {ToggleSearchButton}
                        </div>
                        :
                        <div>
                            <footer>
                                <div>
                                    <Link onClick={() => this.getTripDuration()} to={`/booking-details/${this.props.match.params.id}`}><button className="book-btn">Book</button></Link>
                                </div>

                            </footer>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { startDate, endDate, total, city, tripLength } = state;
    // const {total, city } = state;

    return {
        startDate,
        endDate,
        total,
        city,
        tripLength
    }
}
// OneHome.propTypes = {
//     show: PropTypes.bool
//   }

export default compose(
    connect(mapStateToProps, { getStartDate, getEndDate, getTotal, getTripLength }),
    GoogleApiWrapper({
        apiKey: ('AIzaSyALYkGo0Uzu_yMVAZ48LV4FzI47BnuTvn8')
    })
)(OneHome)