import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../src/pages/Home';
import MapPage from '../src/pages/MapPage';
import Details from '../src/pages/Details';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/Map' exact={true} component={MapPage} />
                <Route path='/Details' exact={true} component={Details} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes