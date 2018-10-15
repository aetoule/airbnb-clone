import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAllHomes} from './redux/reducer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {  }

  }
  componentDidMount() {
    console.log('hi')
    this.props.getAllHomes()
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        App
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

export default connect (mapStateToProps, {getAllHomes}) (App);
