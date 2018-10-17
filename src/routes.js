import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Results from './Components/Results/Results';
import OneHome from './Components/OneHome/OneHome';
import Checkout from './Components/Checkout/Checkout';
import Confirmation from './Components/Confirmation/Confirmation';

export default(
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Results} exact path="/results" />
        <Route component={OneHome} exact path="/results/:id" />
        <Route component={Checkout} exact path="/checkout" />
        <Route component={Confirmation} exact path="/confirmation" />

    </Switch> 
)