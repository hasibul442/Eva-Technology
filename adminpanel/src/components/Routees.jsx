import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard/dashboard';

const Routees = () => {
    return (
        <Switch>
            <Route path="/" component={ Dashboard } />
        </Switch>
    );
}

export default Routees;
