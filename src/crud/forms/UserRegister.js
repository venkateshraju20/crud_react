import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class UserRegister extends Component {
    state = {
        email: "",
        password: "",
        mobile: "",
        firstName: "",
        lastName: "",
        profession: "",
    }

    validate(values) {
        let errors = {}
        if (!values.email) {
            errors.email = 'Enter email';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Enter password'
        } else if (values.description.length < 6) {
            errors.password = 'Enter atleast 6 Characters'
        }
        return errors
    }

    onSubmit(values) {
        // let username = INSTRUCTOR;

        let course = {
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            profession: values.profession,
        }

        console.log(course.lastName);
    }

    render() {
        return (
            <div className="container">
                <h4>Any place in your app!</h4>
                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: '', firstName: '', lastName: '', profession: '' }}
                    // validateOnChange={false}
                    // validateOnBlur={false}
                    // validate={this.validate}
                    onSubmit={this.onSubmit}
                >
                    {(props) => (
                        <Form>
                            <fieldset className="form-group">
                                <label>Email</label>
                                <Field className="form-control" type="email" name="email" />
                            </fieldset>
                            <ErrorMessage name="email" component="div" />
                            <fieldset className="form-group">
                                <label>Password</label>
                                <Field className="form-control" type="password" name="password" />
                            </fieldset>
                            <ErrorMessage name="password" component="div" />
                            <fieldset className="form-group">
                                <label>Confirm Password</label>
                                <Field className="form-control" type="password" name="confirmPassword" />
                            </fieldset>
                            <ErrorMessage name="confirmPassword" component="div" />
                            <fieldset className="form-group">
                                <label>First Name</label>
                                <Field className="form-control" type="text" name="firstName" />
                            </fieldset>
                            <ErrorMessage name="firstName" component="div" />
                            <fieldset className="form-group">
                                <label>Last Name</label>
                                <Field className="form-control" type="text" name="lastName" />
                            </fieldset>
                            <ErrorMessage name="lastName" component="div" />
                            <fieldset className="form-group">
                                <label>Profession</label>
                                <Field className="form-control" type="text" name="profession" />
                            </fieldset>
                            <ErrorMessage name="profession" component="div" />
                            <button className="btn btn-success" type="submit">Save</button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default UserRegister;