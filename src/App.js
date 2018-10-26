import React, { Component } from 'react';
import './App.css';
import Results from './Components/Results/Results';
import routes from './routes';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Header from './Components/Header/Header';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Results/> */}
        {routes}
      </div>
    );
  }
}

export default App;
