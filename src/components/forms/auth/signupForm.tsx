import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

interface ChildProps{
    onSubmit:(obj:SignupFormData)=>void
}

export interface SignupFormData{
    email:string,
    password:string,
    confirm_password:string
}

const SignupForm: React.FC<ChildProps> = ({ onSubmit }) => {
    
    const validationSchema =
        Yup.object().shape({
            email: Yup.string()
                .email('Please enter a valid email')
                .required("Please enter an email address"),
            password: Yup.string()
                .required('Please enter a password')
                .min(6,'Password must be at least 6 characters'),
            confirm_password: Yup.string()
                .required('Please enter a password')
                .test('passwords-match', 'Passwords must match', function (value) {
                    return this.parent.password === value;
                })
        })

    const initialValues:SignupFormData = {
        email: '',
        password: '',
        confirm_password:''
    }
    return (
            <div className="row">
                <div className="col-md-4 offset-md-4 ">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleSubmit,
                            /* and other goodies */
                        }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div >
                                        <label htmlFor = "email_input" className = {`${errors.email && touched.email ?'error':''}`}> Email </label>
                                        <Field
                                            className = {`form-control ${errors.email && touched.email?'error':''}`}
                                            type="email"
                                            name="email"
                                            id = "email_input"
                                        />
                                        <ErrorMessage name = "email">{(msg)=><div className = "error">{msg}</div>}</ErrorMessage>
                                    </div>
                                    <div>
                                        <label htmlFor = "password_input" className = {`${errors.password && touched.password ?'error':''}`}>Password</label>
                                        <Field
                                            id = "password_input"
                                            className = {`form-control ${errors.password && touched.password ?'error':''}`}
                                            type="password"
                                            name="password"
                                        />
                                        <ErrorMessage name = "password">{(msg)=><div className = "error">{msg}</div>}</ErrorMessage>
                                    </div>
                                    <div>
                                        <label htmlFor = "confirm_password_input" className = {`${errors.confirm_password && touched.confirm_password ?'error':''}`}>Confirm Password</label>
                                        <Field
                                            id = "confirm_password_input"
                                            className = {`form-control ${errors.confirm_password && touched.confirm_password ?'error':''}`}
                                            type="password"
                                            name="confirm_password"
                                        />
                                        <ErrorMessage name = "confirm_password">{(msg)=><div className = "error">{msg}</div>}</ErrorMessage>
                                    </div>
                                    <div className = "text-center mt-4">
                                        <button type="submit" className = "btn btn-block btn-primary" >Create an Account</button>
                                    </div>
                                </Form>
                            )}
                    </Formik>
                </div>
            </div>
    );

}

export default SignupForm;
