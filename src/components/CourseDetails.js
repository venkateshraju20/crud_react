import React, { Component } from 'react';
import CourseService from '../services/CourseService';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class CourseDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            username: '',
            description: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {
        if (this.state.id == -1) {
            return;
        }
        CourseService.retrieveCourse(this.state.id)
            .then(response => {
                console.log(response.data);
                this.setState({
                    username: response.data.username,
                    description: response.data.description
                })
            });
    }

    validate(values) {
        let errors = {}

        if (!values.username) {
            errors.username = 'Enter operation'
        } else if (values.username.length < 3) {
            errors.username = 'Enter atleast 3 Characters in operation'
        }

        if (!values.description) {
            errors.description = 'Enter description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }
        return errors
    }

    onSubmit(values) {

        console.log(values);

        let course = {
            id: this.state.id,
            username: values.username,
            description: values.description,
            targetDate: values.targetDate
        }
        if (this.state.id === -1) {
            CourseService.createCourse(course)
                .then(() => this.props.history.push('/courses'))
        } else {
            CourseService.updateCourse(this.state.id, course)
                .then(() => this.props.history.push('/courses'))
        }


    }


    render() {
        let { username, description, id } = this.state;
        return (
            <div>
                <h3>Course Details</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, username, description }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="username" component="div"
                                        className="alert alert-danger" />
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-danger" />
                                    {id != -1 ?
                                        <fieldset className="form-group">
                                            <label>Id</label>
                                            <Field className="form-control" type="text" name="id" disabled />
                                        </fieldset> : null}
                                    <fieldset className="form-group">
                                        <label>Operation</label>
                                        <Field className="form-control" type="text" name="username" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    {id != -1 ? <button className="btn btn-success" type="submit">Update</button> 
                                    : <button className="btn btn-success" type="submit">Save</button>}

                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}
export default CourseDetails;