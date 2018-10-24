 import React, { Component } from 'react';
 import Geocode from "react-geocode";

 class Geocoding extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     componentDidMount() {
        Geocode.setApiKey("AIzaSyA_8FxS5bXfNmdj7sTzhxqeGyYGxGQq-y0");
        Geocode.enableDebug();
        this.getGeocode()
     }

      // Get latidude & longitude from address.
    getGeocode = () => {
        Geocode.fromAddress("1830 W Telegraph Pass Rd Phoenix, AZ 85041").then(
            response => {
            console.log('reached inside of Geocode.fromAddress promise')
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat);
            console.log(lng);

            },
            error => {
            console.error('err',error);
            }
        );
  }
    render() { 
        // Geocode.setApiKey("AIzaSyDeVXi-L0ax7RhVVjYNZb_3fHXqNCIFyWA");
        // Geocode.enableDebug();

        return ( 
            <div>
                <p>hi from geocode component</p>
            </div>
        );
    }
 }
  
 export default Geocoding;
 
