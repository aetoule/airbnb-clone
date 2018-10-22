import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStartDate, getEndDate, getTotal, getTripLength } from '../../redux/reducer';
import axios from 'axios';
import TakeMoney from '../StripeCheckout';
import './BookingDetails.scss'


class BookingDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceFee: 20,
            tax: 23,
            homeInfo: {},
        }
    }
    componentDidMount() {
        console.log('fired')
        this.getHouse();
    }

    getHouse() {
        console.log(this.props.match.params.id)
        axios.get(`/api/home/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    homeInfo: res.data[0]
                })
            })
    }

    handleGoBack = () => {
        this.props.history.goBack();
    }
    render() { 
        console.log('this.props.tripLength',this.props.tripLength)
        const { home_name, price, max_guests, describe_space, describe_other_things_to_note, describe_main, describe_interaction_with_guests, describe_guest_access, city, address } = this.state.homeInfo;

        let startDay = this.props.startDate._d.getDate()
        let startMonth = this.props.startDate._d.getMonth() + 1
        let startYear = this.props.startDate._d.getFullYear()
        let startDateString = startMonth + '/' + startDay + '/' + startYear;

        // get end date 
        let endDay = this.props.endDate._d.getDate()
        let endMonth = this.props.endDate._d.getMonth() + 1
        let endYear = this.props.endDate._d.getFullYear()
        let endDateString = endMonth + '/' + endDay + '/' + endYear;

        let totalPrice = this.state.serviceFee + this.state.tax + (this.props.tripLength * this.state.homeInfo.price);
        let totalCents = totalPrice * 100
        console.log(totalPrice)
        // this.props.getTotal(totalCents);
        console.log(totalCents)
        this.props.getTotal(totalCents)
        let totalAmountDollars = totalCents / 100
        return ( 
            <div>
                <div className="booking-info">
                        <button onClick={() => this.handleGoBack()} className='x-box'>X</button>
                        <h5>${price} per night</h5>
                        <hr></hr>
                        <div className="trip-dates-box">
                            <h3>Dates</h3>
                            <p>{startDateString} to {endDateString}</p>
                        </div>
                        <div className="small-space"></div>
                        <div className="small-space"></div>

                        <div className="trip-costs-list">
                            <div className="list-price-times-days">
                                <p>${price} x {this.props.tripLength} nights</p>
                            </div>
                            <div className="small-space"></div>

                            <div className="list-tax-fee">
                                <p>Occupancy taxes and fees</p>
                                <h3>${this.state.tax}</h3>
                            </div>
                            <div className="small-space"></div>

                            <div className="list-service-fee">
                                <p>Service fee</p>
                                <h3>${this.state.serviceFee}</h3>
                                
                            </div>
                            <div className="small-space"></div>

                            <div className="total-count">
                                <p>Total</p>
                                <h3>${totalAmountDollars}</h3>
                                
                            </div>
                            
                            <TakeMoney />
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
    const { startDate, endDate, total, tripLength } = state;
    // const {total, city } = state;

    return {
        startDate,
        endDate,
        total,
        tripLength
    }
}

 
export default connect(mapStateToProps, { getStartDate, getEndDate, getTotal, getTripLength })(BookingDetails);
