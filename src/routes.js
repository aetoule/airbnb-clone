import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Results from './Components/Results/Results';
import OneHome from './Components/OneHome/OneHome';
import Checkout from './Components/Checkout/Checkout';
import Confirmation from './Components/Confirmation/Confirmation';
import BookingDetails from './Components/BookingDetails/BookingDetails';
import GetStarted from './Host_Components/GetStarted/GetStarted';
import PlaceLocation from './Host_Components/PlaceLocation/PlaceLocation';
import UploadPhotos from './Host_Components/UploadPhotos/UploadPhotos';
import AddDescription from './Host_Components/AddDescriptions/AddDescriptions';
import NameandPrice from './Host_Components/NameandPrice/NameandPrice';

export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Results} exact path="/results" />
        <Route component={OneHome} exact path="/results/:id" />
        <Route component={Checkout} exact path="/checkout" />
        <Route component={Confirmation} exact path="/confirmation" />
        <Route component={BookingDetails} exact path="/booking-details/:id" />
        <Route component={GetStarted} exact path="/get-started" />
        <Route component={PlaceLocation} exact path="/location" />
        <Route component={UploadPhotos} exact path="/upload-photos" />
        <Route component={AddDescription} exact path="/description" />
        <Route component={NameandPrice} exact path="/name-price" />


    </Switch>
)