import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export class NameandPrice extends Component {

  // postHostsHome() {
  //   axios.post('api/myhomes', {
  //     home_name: "home name",
  //     price: 56,
  //     max_guests: 2,
  //     describe_main: "main description",
  //     describe_space: "home space",
  //     describe_guest_access: "home guest acces",
  //     describe_interaction_with_guests: "home interations with guests",
  //     describe_other_things_to_note: "home describe other things to note",
  //     address: "home address",
  //     city: "home city"

  //   })
  // }

  render() {
    return (
      <div>
        <h1>Name Your Place</h1>
        <h2>Price Your Place</h2>
        <Link to="/">
          <button>Finish</button>
        </Link>
      </div>
    )
  }
}

export default NameandPrice
