import React from 'react';
import NewCollection from './containers/NewCollection';
import ViewCollection from './containers/ViewCollection';
import CollectionDetails from './containers/CollectionDetails';
import NotFound from './containers/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const createRoutes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ViewCollection} />
            <Route exact path="/collections" component={ViewCollection} />
            <Route exact path="/collections/new" component={NewCollection} />
            <Route exact path="/collections/details" component={CollectionDetails} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default createRoutes;