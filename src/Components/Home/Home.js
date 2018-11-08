import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getStartDate, getEndDate, getCity } from '../../redux/reducer';
import axios from 'axios';
import './Home.css';
import Search from '../Search/Search'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
        }
    }


    handleChange(event) {
        // console.log(this.refs.city.value)
        // console.log(event.target.value)
        this.props.getCity(event.target.value)
        // this.props.(event)
    }

    render() {
        console.log(this.props.city)
        console.log('this.state.startDate', this.state.startDate)
        console.log('this.state.endDate', this.state.endDate)
        const { getEndDate, getStartDate, endDate, startDate } = this.props;
        return (
            <div>
                <div className="home-main-img">
                    <h1 className="home-h1">Book unique homes.</h1>
                    <br></br>

                </div>
                <div>
                    
                    <Search />
                    {/* <Link to="/get-started">
                        <button>Host</button>
                    </Link> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { startDate, endDate, city } = state;
    return {
        startDate,
        endDate,
        city
    }
}

export default connect(mapStateToProps, { getStartDate, getEndDate, getCity })(Home);

