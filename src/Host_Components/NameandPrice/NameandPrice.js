import axios from 'axios'
import { connect } from 'react-redux';
import { getHostHomeName, getHostHomePrice } from '../../redux/reducer';

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

  handleHomeName = (event) => {
    this.props.getHostHomeName(event)
  }

  handleHomePrice = (event) => {
    this.props.getHostHomePrice(event)
  }

  render() {
    const { hostHomeName, hostHomePrice } = this.props
    return (
      <div>
        <h1>Name Your Place</h1>
        <input type="text" value={hostHomeName} onChange={(e) => this.handleHomeName(e.target.value)} />

        <h2>Price Your Place</h2>
        <input type="text" value={hostHomePrice} onChange={(e) => this.handleHomePrice(e.target.value)} />

        {hostHomeName && hostHomePrice ?
          <Link to="/">
            <button>Finish</button>
          </Link>
          :
          <Link to="/">
            <button disabled>Finish</button>
          </Link>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { hostHomeName, hostHomePrice } = state;
  return {
    hostHomeName, hostHomePrice
  }
}

export default connect(mapStateToProps, { getHostHomeName, getHostHomePrice })(NameandPrice)
