import React, { Component } from 'react';
import axios from 'axios';
import './one-home.css';

class OneHome extends Component {
    constructor(props) {
        super(props);
        // let houseId = this.props.match.params.id;
        this.state = { 
            homeInfo: {},
            similarHomes: [],
            mainImg: ''
        }
    }
    componentDidMount() {
        this.getHouse()
        this.getSimilarHomes()
    }

    getHouse() {
        console.log(this.props.match.params.id)
        axios.get(`/api/home/${this.props.match.params.id}`)
        .then(res => {
            console.log(res)
            this.setState({
                homeInfo: res.data[0]
            })    
        })
    }

    getSimilarHomes() {
        axios.get('/api/home-results')
        .then(res => {
            console.log('res', res.data)
            console.log('this is the id', this.props.match.params.id)

            let allSimilarHomes = res.data

            console.log('res.data', res)
            let deleteIndex = this.props.match.params.id - 1;
            allSimilarHomes.splice(deleteIndex, 1)
            this.setState({
                similarHomes: allSimilarHomes
            })
            console.log(this.state.similarHomes)
        })
    }

    render() { 
        console.log(this.state)
        console.log(this.state.homeInfo.homeid)
        console.log(this.state.homeInfo.home_name)
        const {home_name, price, max_guests, describe_space, describe_other_things_to_note, describe_main, describe_interaction_with_guests,  describe_guest_access, city, address} = this.state.homeInfo;
        let mappedSimilarListings = this.state.similarHomes.map(home => {
            return (
                <img></img>
            )
        })
        return ( 
            <div>
                <div className="search-bar-header"></div>
                <div className="img-carousel"></div>
                {/* <img src={homeImg}/> */}
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

            </div>
        );
    }
}

export default OneHome;