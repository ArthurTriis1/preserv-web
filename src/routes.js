import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../src/pages/Home'
import MapPage from '../src/pages/MapPage'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/Map' exact={true} component={MapPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes