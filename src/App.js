import React, { Component } from 'react';
import './App.css';
import Results from './Components/Results/Results';
import routes from './routes';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Results/> */}
        {routes}
      </div>
    );
  }
}

export default App;
