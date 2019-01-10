import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { getUsersEmail } from '../redux/reducer';
import axios from 'axios';
import { Link } from 'react-router-dom'

class TakeMoney extends React.Component {

  onToken = (token) => {
    this.props.getUsersEmail([token.email])

    axios.post('/save-stripe-token', { token })
      .then(response => {
        response.data
        alert(`We are in business`);
      });
    window.location.assign('/confirmation')

  }

  render() {
    return (

      <StripeCheckout
        token={this.onToken} // submit callback
        stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
        amount={this.props.total}
      />
    )
  }
}

const mapStateToProps = state => {
  const { total, userEmail } = state;
  return {
    total,
    userEmail
  }
}

export default connect(mapStateToProps, { getUsersEmail })(TakeMoney)