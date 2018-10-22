import React, { Component } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import './one-home.css';
import { connect } from 'react-redux';
import { getStartDate, getEndDate, getTotal } from '../../redux/reducer';
import TakeMoney from '../StripeCheckout';
// import Lightbox from 'react-images';
import ImageGallery from 'react-image-gallery';
import { start } from 'pretty-error';


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
            total: 0,
        }
    }
    componentDidMount() {
        this.getHouse()
        this.getSimilarHomes()
        // this.getTripDuration()
        console.log('fired in getTripDuration. Cdm order: 3')
        axios.post('/api/getdays', { start_date: this.props.endDate, end_date: this.props.startDate }).then(res => {
            console.log('hi')
            console.log('res.data[0].date_part', res.data[0].date_part)
            this.setState({
                tripLength: res.data[0].date_part
            })
            console.log('hi2')
        })
        // this.getTotal()
        console.log('fired in getTotal. Cdm order: 4')
        console.log('this.state.tripLength---', this.state.tripLength)
        let totalPrice = this.state.serviceFee + this.state.tax + (this.state.tripLength * this.state.homeInfo.price);
        let totalCents = totalPrice * 100
        // this.props.getTotal(totalCents);
        console.log('totalCents--', totalCents)
        console.log('totalPrice', totalPrice)
        this.setState({
            total: totalPrice
        })
        console.log('this.state.total',this.state.total)
    }
    componentDidUpdate(total) {
        if (this.state.total != 0) {
            
        }
        // this.getTotal()
    }

    getHouse() {
        console.log('fired in getHouse. Cdm order: 1')
        axios.get(`/api/home/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    homeInfo: res.data[0]
                })
            })
        console.log('cdm order: 1')
    }
    // CROSSED OUT JUST SO I CAN LOAD PAGE WITHOUT PICKING DATES
    getSimilarHomes() {
        console.log('fired in getSimilarHomes. Cdm order: 2')
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
        console.log('cdm order: 2')

    }

    // mine
    // getTripDuration() {
    //     const {startDate, endDate} = this.props
    //     axios.post('/api/getdays', {end_date: endDate, start_date: startDate}).then(res => {
    //         console.log('/api/getdays res.data', res.data)
    //         console.log(res.data[0].date_part)
    //         this.setState({
    //             tripLength: res.data[0].date_part
    //         })
    //     })
    //     console.log('this.state.tripLength', this.state.tripLength)
    // }

    // kaylin's
    // getTripDuration() {
    //     console.log('fired in getTripDuration')
    //     axios.post('/api/getdays', { start_date: this.props.endDate, end_date: this.props.startDate }).then(res => {
    //         console.log('res.data[0].date_part', res.data[0].date_part)
    //         this.setState({
    //             tripLength: res.data[0].date_part
    //         })
    //     })

    // }


    // getTotal() {
    //     console.log('fired in getTotal')
    //     console.log('this.state.tripLength---', this.state.tripLength)
    //     let totalPrice = this.state.serviceFee + this.state.tax + (this.state.tripLength * this.state.homeInfo.price);
    //     let totalCents = totalPrice * 100
    //     // this.props.getTotal(totalCents);
    //     console.log('totalCents--', totalCents)
    //     console.log('totalPrice', totalPrice)
    //     this.setState({
    //         total: totalPrice
    //     })
    //     console.log('this.state.total',this.state.total)
    // }

    render() {
        const { home_name, price, max_guests, describe_space, describe_other_things_to_note, describe_main, describe_interaction_with_guests, describe_guest_access, city, address } = this.state.homeInfo;
        // CROSSED OUT JUST SO I CAN LOAD PAGE WITHOUT PICKING DATES
        // const { total } = this.props;
        let mainImage = this.state.currentHomeImgList.map(e => {
            if (e.main == true) {
                return <img src={e.img_url} alt="main image" />
            } else {
                ''
            }

        })

        // mapping over to get the house names of other similar homes
        let mappedSimilarListings = this.state.similarHomes.map(home => {
            return (
                <p><b>{home.home_name}</b></p>
            )
        })

        // map of this house's images (not using anymore)
        let mappedImagesOfCurrHouse = this.state.currentHomeImgList.map(img => {
            return (
                <img className="home-img" src={img.img_url} />
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


        // let totalPrice = this.state.serviceFee + this.state.tax + (this.state.tripLength * this.state.homeInfo.price);
        // let totalCents = totalPrice * 100
        // console.log(totalPrice)
        // // this.props.getTotal(totalCents);
        // console.log(totalCents)
        // this.getTotal(totalPrice)

        // let pushedImgs = [];
        let pushedImgs = this.state.currentHomeImgList.map( img => {
            // console.log(img.img_url)
            return img.img_url;
            // pushedImgs.push(img.img_url)
            
        })
        let pushedWithSrc = [];
        for (let i = 0; i < pushedImgs.length; i++) {
            // let obj = {src: pushedImgs[i]}
            let obj = {original: pushedImgs[i]}
            pushedWithSrc.push(obj)
        }

        console.log('this.props.startDate--',this.props.startDate)
        console.log('this.props.endDate--',this.props.endDate)

        return (
            <div className="one-home-entire-container">
                <div className="search-bar-header">

                    {/* <input type='text'>Search</input> */}
                </div>
                <div className="trying-ImageGallery-instead-of-lightbox">
                <ImageGallery items={pushedWithSrc} />
                </div>
                {/* <div className="lightboxxx">
                {
                    (this.state.currentHomeImgList)
                    ?
                    <div>
                        <h1>hi</h1>
                    <Lightbox
                    // images={mappedImages}

                    // should be right format (?)
                    images={pushedWithSrc}
                    // images={testArray}
                    
                    // images={[{src: "https://a0.muscache.com/im/pictures/137bd584-38dd-4035-a12f-9ee2a74a5da1.jpg?aki_policy=x_large"}, {src: "https://a0.muscache.com/im/pictures/137bd584-38dd-4035-a12f-9ee2a74a5da1.jpg?aki_policy=x_large"}]}

                    isOpen={true}
                    // onClickPrev={this.gotoPrevious}
                    // onClickNext={this.gotoNext}
                    // onClose={this.closeLightbox}
                />
                </div>
                 : 
                "Loading..."

                }
                </div> */}

                <div className="oneHome-left-and-right-container">
                    <div className="oneHome-left-side-container">
                        <h1>{home_name}</h1>
                        <p>{city}  ·  {max_guests} guests</p>
                        {/* <p>{max_guests} guests</p> */}
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
                        <h5>The neighborhood</h5>
                        <p>This home is located in {city}</p>
                        <p>Google map here</p>
                        <h5>Similar listings</h5>
                        {mappedSimilarListings}
                        <h5>{this.state.total}</h5>
                        {/* {mappedImagesOfCurrHouse} */}
                    </div>
                    <div className="oneHome-right-side-container">
                        <h5>${price} per night</h5>
                        <hr></hr>
                        <h6>Dates</h6>
                        <div className="trip-dates-box">
                            {/* <p>{startDateString} to {endDateString}</p> */}           
                        </div>
                        {/* <div className="trip-costs-list">
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


                        </div> */}

                        <TakeMoney />
                    </div>
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
export default connect(mapStateToProps, { getStartDate, getEndDate, getTotal })(OneHome);


// OneHome.propTypes = {
//     show: PropTypes.bool
//   }