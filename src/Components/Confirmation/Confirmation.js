import React, { Component } from 'react';
import { connect } from 'react-redux'
class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.props.userEmail);

        return (
            <div>Thanks 4 ur shit man</div>
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