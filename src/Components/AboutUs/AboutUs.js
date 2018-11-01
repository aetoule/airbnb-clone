import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="about-us-container">
                <div className="about-us-text-container">
                    <h1 className="get-to-know-us-text">Get To Know Us</h1>
                </div>
                <div className="about-us-left-right-container">
                    <div className="picture-of-us">
                    </div>
                    <div className="bios">
                        <div className="kaylin-bio">
                            <h2>Kaylin</h2>
                            <p></p>
                        </div>
                        <div className="aisha-bio">
                            <h2>Aisha</h2>
                            <p>Aisha is a UX Designer turned web developer from Seattle. She loves to drink coffee and explore her newly discovered home city of Phoenix. She is extremely excited to jump into the industry as a front-end web developer</p>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AboutUs;