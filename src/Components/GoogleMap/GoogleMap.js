import {Map, InfoWindow, Marker, Circle, GoogleApiWrapper} from 'google-maps-react';
import './GoogleMap.css'


import React, { Component } from 'react';

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
         
    }
    onMarkerClick = (props, marker, e) => {
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
      }
      onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          });
        }
      }
    render() { 
        // google map styling
        const style = {
            // height: '300px',
            // width: '300px',
            // top: '40%',
    
            // // z-index: 3;
            // position: 'relative',
            // padding: '0px',
            // // border-width: '0px',
            // // margin: '50px',
            // margin: '0 auto',
            // left: '0px',
            // top: '0px',

            position: 'relative',
            left: '-41px',
            /* right: 0px; */
            /* bottom: 0px; */
            top: '40%',
            /* top: -9%; */
            height: '310px',
            width: '310px',
            /* padding: 0px; */
            /* margin: 0px auto; */
            display: 'inherit',
            overflow: 'hidden',
            zIndex: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
        } 
        let laatitude = 33.4508;
        let loongitude = -112.09048;
        const coords = { lat: laatitude, lng: loongitude};
        // const coords = { lat: 33.307911, lng: -111.89084}

        
        return(
            <div>
                <div className="outside-map-container">
                            <div className="map-container">
                                <Map google={this.props.google} zoom={14}
                                onClick = { this.onMapClick }

                                initialCenter={coords}
                                style={style}
                                >
                                {/* <Circle
                                    radius={300}
                                    center={coords}
                                    onMouseover={() => console.log('mouseover')}
                                    onClick={() => console.log('click')}
                                    onMouseout={() => console.log('mouseout')}
                                    strokeColor='transparent'
                                    strokeOpacity={0}
                                    strokeWeight={5}
                                    fillColor='#FF0000'
                                    fillOpacity={0.2}
                                /> */}
                        
                                <Marker onClick={this.onMarkerClick}
                                        name={'Current location'}
                                                //   position = {{ lat: 33.4508, lng: -112.09048 }}
 
                                        />
                        
                                <InfoWindow onClose={this.onInfoWindowClose}>
                                    <div>
                                    {/* <h1>{this.state.selectedPlace.name}</h1> */}
                                    </div>
                                </InfoWindow>
                                </Map>
                            </div>
                        </div>
            </div>
         );
    }
}
 

export default GoogleApiWrapper({
    apiKey: ('AIzaSyALYkGo0Uzu_yMVAZ48LV4FzI47BnuTvn8')
  })(GoogleMap);