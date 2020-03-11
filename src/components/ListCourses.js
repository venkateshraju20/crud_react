import React, { Component } from 'react';

import CourseService from '../services/CourseService';

class ListCourses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this);
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this);
        this.updateCourseClicked = this.updateCourseClicked.bind(this);
        this.addCourseClicked = this.addCourseClicked.bind(this);
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CourseService.retrieveAllCourses()
            .then(
                response => {
                    console.log(response.data);
                    this.setState({ courses: response.data });
                }
            )
    }

    deleteCourseClicked(id) {
        CourseService.deleteCourse(id)
            .then(
                response => {
                    console.log(response.data);
                    this.setState({ message: `Delete of course ${id} Successful` });
                    this.refreshCourses();
                }
            );
    }

    updateCourseClicked(id) {
        this.props.history.push(`/courses/${id}`)
    }

    addCourseClicked() {
        this.props.history.push(`/courses/-1`)
    }

    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}

                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Operation</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(course =>
                                    <tr key={course.id}>
                                        <td>{course.id}</td>
                                        <td>{course.username}</td>
                                        <td>{course.description}</td>
                                        <td><button className="btn btn-error" onClick={() => this.updateCourseClicked(course.id)}>Update</button></td>
                                        <td><button className="btn btn-error" onClick={() => this.deleteCourseClicked(course.id)}>Delete</button></td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addCourseClicked}>Create course</button>
                </div>
            </div>
        );
    }
}

export default ListCourses;