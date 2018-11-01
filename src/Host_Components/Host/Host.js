import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Host.css';

class Host extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="top-background-image">
                    <div className="host-two-side-wrapper">
                        <div className="host-left-side">
                            <p className="host-on-airbnb-text">HOST ON AIRBNB</p>
                            <h1 className="become-host-h1-text">Earn money as an</h1>
                            <h1 className="become-host-h1-text-2">Airbnb host</h1>
                        </div>
                        <div className="host-right-side">
                            <h1 className="host-find-out-earning">Find out what you could earn</h1>
                            <div className="city-box">
                                <p className="city-box-text">Phoenix</p>
                            </div>
                            <div className="city-box">
                                <p className="city-box-text">4 guests</p>
                            </div>
                            <h1 className="monthly-potential">$1,480</h1>
                            <h2>monthly potential</h2>
                            <div className="spall-space"></div>
                            <Link to="/get-started">
                                <button className="get-started-host">Get started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Host;