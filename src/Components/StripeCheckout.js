import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';

 
class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
    console.log('hii')
    window.location.replace('/confirmation')

  }
  // ...
 
  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken} // submit callback
        stripeKey= {process.env.REACT_APP_PUBLISHABLE_KEY}

        amount={this.props.total}
        />
        
    )
  }
}

const mapStateToProps = state => {
    const {total} = state;
    return {
        total
    }
}

export default connect (mapStateToProps)(TakeMoney)