import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getStartDate, getEndDate, getCity } from '../../redux/reducer';
import axios from 'axios';
// import './Home.css';

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
        {/* //   <div className="home-main-img">
      //     <h1 className="home-h1">Book unique homes.</h1>
      //     <br></br>

      //   </div> */}

        <div className='home-filter-container'>
          <h6 className="home-box-titles">WHERE</h6>
          <select value={this.props.city} ref='city' onChange={(e) => this.handleChange(e)} placeholder="select a city">
            <option value="">Select a City</option>
            <option value="Phoenix">Phoenix</option>
            <option value="Flagstaff">Flagstaff</option>
            {/* <option value="Sedona">Sedona</option> */}
            <option value="Tucson">Tucson</option>
            <option value="Williams">Williams</option>
          </select>
          <h6 className="home-box-titles">DATES</h6>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState(() => {
              getStartDate(startDate)
              getEndDate(endDate)
              return {
                startDate,
                endDate
              }
            })}

            // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />

          <Link to='/results/'><button className="search-btn">Search</button></Link>
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

