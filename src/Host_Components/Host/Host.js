import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Host extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p>This is the become a host page</p>
                <Link to="/get-started">
                    <button>Get started</button>
                </Link>
            </div>
         );
    }
}
 
export default Host;