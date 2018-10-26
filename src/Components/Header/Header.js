import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div><Link to="/">Logo</Link></div>
                <nav>
                    <li><Link to="/become-a-host">Become a Host</Link></li>
                    <li><Link to="/about-us">About The Developers</Link></li>
                    <li><Link to="/become-a-host">Become a Host</Link></li>
                    <li>Login</li>
                </nav>
   
            </div>
         );
    }
}
 
export default Header;