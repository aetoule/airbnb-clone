import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStartDate, getEndDate, getTotal, getTripLength } from '../../redux/reducer';
import axios from 'axios';
import TakeMoney from '../StripeCheckout';
import './BookingDetails.scss';
import Search from '../Search/Search'

class BookingDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceFee: 20,
            tax: 23,
            dateToggle: false
            // homeInfo: {},
        }
    }
    componentDidMount() {
        console.log('fired')
        this.getHouse();
    }

    componentDidUpdate(prevProps) {
        if (this.props.endDate !== prevProps.endDate) {
            axios.post('/api/getdays', { start_date: this.props.endDate, end_date: this.props.startDate }).then(res => {
                this.props.getTripLength(res.data[0].date_part)
            })
        }
    }

    getHouse() {
        console.log('fired')
        console.log(this.props.houseid)
        // axios.get(`/api/home/${this.props.match.params.id}`)
        //     .then(res => {
        //         this.setState({
        //             homeInfo: res.data[0]
        //         })
        //     })

    }

    handleGoBack = () => {
        this.props.history.goBack();
    }


    render() {
        console.log(this.props.homeInformation)
        console.log('this.props.tripLength', this.props.tripLength)
        const { price, max_guests, describe_space, describe_other_things_to_note, describe_main, describe_interaction_with_guests, describe_guest_access, city, address } = this.props.homeInformation;
        let startDateString;
        let endDateString;

        // const startDay = this.props.startDate._d.getDate()
        // const startMonth = this.props.startDate._d.getMonth() + 1
        // const startYear = this.props.startDate._d.getFullYear()
        // let startDateString = startMonth + '/' + startDay + '/' + startYear;

        // // get end date 
        // const endDay = this.props.endDate._d.getDate()
        // const endMonth = this.props.endDate._d.getMonth() + 1
        // const endYear = this.props.endDate._d.getFullYear()
        // let endDateString = endMonth + '/' + endDay + '/' + endYear;


        let totalPrice = this.state.serviceFee + this.state.tax + (this.props.tripLength * price);
        let totalCents = totalPrice * 100
        console.log(totalPrice)
        // this.props.getTotal(totalCents);
        console.log(totalCents)
        this.props.getTotal(totalCents)
        let totalAmountDollars = totalCents / 100
        let nightsTimesPrice = this.props.tripLength * price



        const dateBox = this.props.endDate ?

            <div className="trip-dates-box">

                <p>{this.props.startDate._d.getMonth() + 1}/{this.props.startDate._d.getDate()}/{this.props.startDate._d.getFullYear()} to {this.props.endDate._d.getMonth() + 1}/{this.props.endDate._d.getDate()}/{this.props.endDate._d.getFullYear()}</p>
                {console.log(this.props.endDate)}

            </div> :
            <div>
                {this.state.dateToggle === false ?
                    <div> <button onClick={() => this.setState({ dateToggle: true })}>Add Dates</button>
                    </div> :
                    <div>
                        <button onClick={() => this.setState({ dateToggle: false })}>X</button>
                        <Search />
                    </div>
                }

            </div>






        return (
            <div>
                <div className="booking-info">
                    <button onClick={() => this.handleGoBack()} className='x-box'>X</button>
                    <div className="price-per-night">
                        <h6 className="price-amount">${price}</h6>
                        <h6>per night</h6>
                    </div>
                    <div className="five-stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <h6 className="ratings-number-oneHome">751</h6>
                    </div>
                    <hr className="booking-info-line"></hr>
                    <h3>Dates</h3>
                    <div>
                        {dateBox}
                    </div>
                    {/* <div className="trip-dates-box">
                            <p>{startDateString} to {endDateString}</p>
                        </div> */}
                    <div className="small-space"></div>
                    <div className="small-space"></div>

                    <div className="trip-costs-list">
                        <div className="list-price-times-days">
                            <p className="booking-detail-text">${price} x {this.props.tripLength} nights</p>
                            <p className="booking-detail-text">{nightsTimesPrice}</p>
                        </div>
                        <hr className="booking-info-line"></hr>
                        <div className="list-service-fee">
                            <p className="booking-detail-text">Service fee</p>
                            <p className="booking-detail-text">${this.state.serviceFee}</p>
                        </div>
                        <hr className="booking-info-line"></hr>
                        <div className="list-tax-fee">
                            <p className="booking-detail-text">Occupancy taxes and fees</p>
                            <p className="booking-detail-text">${this.state.tax}</p>
                        </div>
                        <hr className="booking-info-line"></hr>

                        <div className="total-count">
                            <p className="booking-detail-text">Total</p>
                            <h6>${totalAmountDollars}</h6>
                        </div>

                        <TakeMoney />
                        <p className="wont-be-charged-text">You won't be charged yet</p>
                        {/* <div className="list-tax-fee">
                                <p>${price} x {this.state.tripLength} nights</p>
                            </div>
                            <div className="list-total">
                                <p>${price} x {this.state.tripLength} nights</p>
                            </div> */}

                    </div>
                </div>


            </div>
        );
    }
}

const mapStateToProps = state => {
    const { startDate, endDate, total, tripLength, homeInformation } = state;
    // const {total, city } = state;

    return {
        startDate,
        endDate,
        total,
        tripLength,
        homeInformation
    }
}


export default connect(mapStateToProps, { getStartDate, getEndDate, getTotal, getTripLength })(BookingDetails);
