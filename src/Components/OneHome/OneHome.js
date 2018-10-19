import React, { Component } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import './one-home.css';
import {connect} from 'react-redux';
import {getStartDate, getEndDate, getTotal} from '../../redux/reducer';
import TakeMoney from '../StripeCheckout';

class OneHome extends Component {
    constructor(props) {
        super(props);
        // let houseId = this.props.match.params.id;
        this.state = { 
            homeInfo: {},
            allHomesInCity: [],
            similarHomes: [],
            currentHomeImgList: [],
            tripLength: 0,
            toggle: false,
            serviceFee: 20,
            tax: 23,
            total: 0
            // startDaate: {}
            // startOrEndDate: ''
        }
    }
    componentDidMount() {
        this.getHouse()
        this.getSimilarHomes()
        this.getTripDuration()
        // let startOrEndDate = (this.props.startDate._d || this.props.endDate._d)
        // console.log('startOrEndDate', typeof startOrEndDate)

        // this.setState({
        //     // startOrEndDate: (this.props.startDate._d || this.props.endDate._d)
        //     startDaate: this.props.startDate._d 
        // })
        // console.log('startOrEndDate', this.state.startOrEndDate)
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

    getSimilarHomes() {
        axios.post('/api/homes-results', {city: this.props.city})
        .then(res => {
            let allHomesWithCurrentHome = res.data
            let allSimilarHomes = allHomesWithCurrentHome
            console.log('allSimilarHomes', allSimilarHomes)
            const idNumber  = allSimilarHomes.findIndex(e => {
                return e.home_id == this.props.match.params.id
            })
            // right now the get one home is not getting the image array. So I'm using this endpoint to get the home info for this house to get access to the image array
            let currentHomeImageArray = res.data[idNumber].imgs
            console.log(currentHomeImageArray)
            allSimilarHomes.splice(idNumber, 1)
            this.setState({
                similarHomes: allSimilarHomes,
                currentHomeImgList: currentHomeImageArray
            })
        })
    }

    getTripDuration() {
        console.log('fired')
        axios.post('/api/getdays', {}).then(res => {
            console.log(res.data[0].date_part)
            this.setState({
                tripLength: res.data[0].date_part
            })
        })
        
    }

    // getTotal() {
    //     console.log('fired')
        
    //     console.log()
    //     console.log(totalPrice)
    //     this.setState({total: totalPrice})
    //     console.log(this.state.total)
    // }


    render() { 
        const {home_name, price, max_guests, describe_space, describe_other_things_to_note, describe_main, describe_interaction_with_guests,  describe_guest_access, city, address} = this.state.homeInfo;
        const {total} = this.props;
        let mappedSimilarListings = this.state.similarHomes.map(home => {
            return (
                <p><b>{home.home_name}</b></p>
            )
        })
        let mappedImages = this.state.currentHomeImgList.map(img => {
            return (
                <img className="home-img" src={img.img_url}/>
            )
        })
        // get start date
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
        this.props.getTotal(totalCents);
        console.log(total)

        return ( 
            <div className="one-home-entire-container">
                <div className="search-bar-header">
                    {/* <input type='text'>Search</input> */}
                </div>
                <div className="igm-carousel"></div>
                {/* <img src={}/> */}
                <h1>{home_name}</h1>
                <p>{city}</p>
                <p>{max_guests} guests</p>
                <p>{describe_main}</p>
                <h3>The space</h3>
                <p>{describe_space}</p>
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
                <h2>The neighborhood</h2>
                <p>This home is located in {city}</p>
                <p>Google map here</p>
                <h2>Similar listings</h2>
                {mappedSimilarListings}
                {mappedImages}
                <p>{startDateString} to {endDateString}</p>
                
                {/* <button onClick={() => this.setState({toggle: !this.state.toggle})} id='book-btn'>Book</button>
                <div id="book-modal" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                                <p>Text in modal</p>
                    </div>
                </div> */}
                <TakeMoney/>

            </div>
        );
    }
}


const mapStateToProps = state => {
    const {startDate, endDate, total, city} = state;
    console.log(startDate)
    return {
        startDate,
        endDate,
        total,
        city
    }
}


export default connect (mapStateToProps, {getStartDate, getEndDate, getTotal}) (OneHome);

// OneHome.propTypes = {
//     show: PropTypes.bool
//   }