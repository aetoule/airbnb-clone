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
                    <p>HOST ON AIRBNB</p>
                    <h1 className="become-host-h1-text">Earn money as an Airbnb host</h1>
                    <Link to="/get-started">
                        <button className="get-started-host">Get started</button>
                    </Link>
                </div>
            </div>
         );
    }
}
 
export default Host;