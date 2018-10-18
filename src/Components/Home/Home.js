import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getStartDate, getEndDate } from '../../redux/reducer';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: ''
        }
    }
    // componentDidMount() {
    //     this.props.getStartDate()
    // }

    render() {
        console.log(this.props)
        console.log('this.state.startDate', this.state.startDate)
        console.log('this.state.endDate', this.state.endDate)
        const { getEndDate, getStartDate, endDate, startDate } = this.props;

        return (
            <div>
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
                <Link to='/results/'>Link to results/2</Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { startDate, endDate } = state;
    return {
        startDate: startDate,
        endDate
    }
}

export default connect(mapStateToProps, { getStartDate, getEndDate })(Home);

