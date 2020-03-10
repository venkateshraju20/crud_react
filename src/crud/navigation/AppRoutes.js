import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import UserRegister from '../forms/UserRegister';

class AppRoutes extends Component {
    render() {
        return (
            <Router>
                <>
                    <h3>Simple CRUD with Spring boot</h3>
                    <Switch>
                        <Route path="/" exact component={UserRegister} />
                    </Switch>
                </>
            </Router>
        );
    }
}
export default AppRoutes;