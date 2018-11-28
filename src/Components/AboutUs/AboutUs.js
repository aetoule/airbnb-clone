import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                            <p>Hi! My name is Kaylin Anderson and I am a Web Developer with a passion for learning new, exciting technologies. I have recently graduated from a fully immersive, Web Development boot-camp and am excited to hit the ground running!</p>
                            <button className="portfolio-button"><a href="http://kaylinann.com/" target="_blank">Check out my Portfolio!</a></button>
                        </div>
                        <div className="aisha-bio">
                            <h2>Aisha</h2>
                            <p>Aisha is a UX Designer turned web developer from Seattle. She loves to drink coffee and explore her newly discovered home city of Phoenix. She is extremely excited to jump into the industry as a front-end web developer</p>
                            <button className="portfolio-button" ><a href="https://aishatoulegenova.com/" target="_blank">Check out my Portfolio!</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;