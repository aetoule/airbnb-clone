import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAllHomes} from '../../redux/reducer';

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {  
      homes:[]
    }

  }
  componentDidMount() {
    this.getHomes()
  }

  getHomes() {
    axios.get('/api/homes').then( res => {
      console.log(res.data)
      this.props.getAllHomes(res.data)
    })
    .catch(err => {
      console.log('err', err)
    })
  }
  render() {
    console.log(this.state.homes)
    let mappedHomes = this.props.homes.map(home => {
      return (
        <div>{home.home_name}</div>
      )
    })
    return (
      <div className="App">
        App
        {mappedHomes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {homes} = state;
  return {
    homes
  }
}

const mapDispatchToProps = {
  getAllHomes
}
export default connect (mapStateToProps, mapDispatchToProps) (Results);
