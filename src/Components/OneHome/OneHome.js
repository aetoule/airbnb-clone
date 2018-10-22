import React, { Component } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import './one-home.css';
import { connect } from 'react-redux';
import { getStartDate, getEndDate, getTotal } from '../../redux/reducer';
import TakeMoney from '../StripeCheckout';
import ImageGallery from 'react-image-gallery';
import { start } from 'pretty-error';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import GoogleMap from '../GoogleMap/GoogleMap';


class OneHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeInfo: {},
            allHomesInCity: [],
            similarHomes: [],
            currentHomeImgList: [],
            tripLength: 0,
            toggle: false,
            serviceFee: 20,
            tax: 23,
        }
    }
    componentDidMount() {
        this.getHouse()
        this.getSimilarHomes()
        this.getTripDuration()
    }

    getHouse() {
        axios.get(`/api/home/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    homeInfo: res.data[0]
                })
            })
    }
    getSimilarHomes() {
        axios.post('/api/homes-results', { city: this.props.city })
            .then(res => {
                let allHomesWithCurrentHome = res.data
                let allSimilarHomes = allHomesWithCurrentHome
                const idNumber = allSimilarHomes.findIndex(e => {
                    return e.home_id == this.props.match.params.id
                })
                // right now the get one home is not getting the image array. So I'm using this endpoint to get the home info for this house to get access to the image array
                let currentHomeImageArray = res.data[idNumber].imgs
                allSimilarHomes.splice(idNumber, 1)
                this.setState({
                    similarHomes: allSimilarHomes,
                    currentHomeImgList: currentHomeImageArray
                })
            })

    }

    getTripDuration() {
        axios.post('/api/getdays', { start_date: this.props.endDate, end_date: this.props.startDate }).then(res => {
            this.setState({
                tripLength: res.data[0].date_part
            })
        })

    }

    render() {
        const { home_name, price, max_guests, describe_space, describe_other_things_to_note, describe_main, describe_interaction_with_guests, describe_guest_access, city, address } = this.state.homeInfo;
        // let mainImage = this.state.currentHomeImgList.map(e => {
        //     if (e.main == true) {
        //         return <img src={e.img_url} alt="main image" />
        //     } else {
        //         ''
        //     }

        // })

        // mapping over to get the house names of other similar homes
        let mappedSimilarListings = this.state.similarHomes.map(home => {
            return (
                <p><b>{home.home_name}</b></p>
            )
        })

        //  get start date
        let startDay = this.props.startDate._d.getDate()
        let startMonth = this.props.startDate._d.getMonth() + 1
        let startYear = this.props.startDate._d.getFullYear()
        let startDateString = startMonth + '/' + startDay + '/' + startYear;

        // get end date 
        let endDay = this.props.endDate._d.getDate()
        let endMonth = this.props.endDate._d.getMonth() + 1
        let endYear = this.props.endDate._d.getFullYear()
        let endDateString = endMonth + '/' + endDay + '/' + endYear;


        let totalPrice = this.state.serviceFee + this.state.tax + (this.state.tripLength * this.state.homeInfo.price);
        let totalCents = totalPrice * 100
        console.log(totalPrice)
        // this.props.getTotal(totalCents);
        console.log(totalCents)
        this.props.getTotal(totalCents)

        let pushedImgs = this.state.currentHomeImgList.map(img => {
            return img.img_url;
        })
        let pushedWithText = [];
        for (let i = 0; i < pushedImgs.length; i++) {
            // let obj = {src: pushedImgs[i]}
            let obj = { original: pushedImgs[i] }
            pushedWithText.push(obj)
        }
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
                        <h3>Amenities</h3>

                        <h5>Similar listings</h5>
                        {mappedSimilarListings}
                        {/* {mappedImagesOfCurrHouse} */}
                    </div>
                    <div className="oneHome-right-side-container">
                        <h5>${price} per night</h5>
                        <hr></hr>
                        <h6>{this.props.total}</h6>
                        <div className="trip-dates-box">
                            {/* <p>{startDateString} to {endDateString}</p> */}
                        </div>
                        <div className="trip-costs-list">
                            <div className="list-price-times-days">
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
                            </div>


                        </div>

                        <TakeMoney />
                        <h5>The neighborhood</h5>
                        <p>This home is located in {city}</p>
                        <p>Google map here</p>
                        <GoogleMap />
                    </div>
                    <footer>Sticky Footer</footer>
                </div>

            </div>
        );
    }
}


const mapStateToProps = state => {
    const { startDate, endDate, total, city } = state;
    // const {total, city } = state;

    return {
        startDate,
        endDate,
        total,
        city
    }
}


// export default connect(mapStateToProps, {getTotal })(OneHome);

//real one:
export default connect(mapStateToProps, { getStartDate, getEndDate, getTotal })(OneHome)
GoogleApiWrapper({
    apiKey: ('AIzaSyALYkGo0Uzu_yMVAZ48LV4FzI47BnuTvn8')
});


// OneHome.propTypes = {
//     show: PropTypes.bool
//   }
