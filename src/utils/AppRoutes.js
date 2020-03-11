import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ListCourses from '../components/ListCourses';
import CourseDetails from '../components/CourseDetails';

class AppRoutes extends Component {
    render() {
        return (
            <Router>
                <>
                    <h2 style={{ textAlign: 'center' }}>Simple CRUD with React and Spring boot</h2>
                    <Switch>
                        <Route path="/" exact component={ListCourses} />
                        <Route path="/courses" exact component={ListCourses} />
                        <Route path="/courses/:id" component={CourseDetails} />
                    </Switch>
                </>
            </Router>
        );
    }
}
export default AppRoutes;