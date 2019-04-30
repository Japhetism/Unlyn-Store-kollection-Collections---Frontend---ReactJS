import React from 'react';
import Auth from './auth/containers/login';
import ForgotPassword from './auth/containers/forgotpassword';
import ResetPassword from './auth/containers/resetpassword';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const createRoutes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/login" component={Auth} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password" component={ResetPassword} />
        </Switch>
    </BrowserRouter>
);

export default createRoutes;