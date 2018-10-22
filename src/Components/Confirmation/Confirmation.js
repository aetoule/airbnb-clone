import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.props.userEmail);

        return (
            <div>Have a great trip!
            <Link to='/results/'><button className="search-btn">Back to results</button></Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { total, userEmail } = state;
    return {
        total,
        userEmail
    }
}

export default connect(mapStateToProps)(Confirmation);