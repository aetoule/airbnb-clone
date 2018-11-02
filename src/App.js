import React, { Component } from 'react';
import './App.css';
import Results from './Components/Results/Results';
import routes from './routes';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Header from './Components/Header/Header';
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* {this.props.location.pathname !== '/get-started' */}
        {/* ? */}
        <Header />
        {/* : */}
        {/* ÷<HostHeader/> */}
       {/* } */}

        {/* <Results/> */}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
