import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

interface ChildProps{
    onSubmit:(obj:LoginFormData)=>void,
    emailLabel : string
    passwordLabel : string
}

export interface LoginFormData{
    email:string,
    password:string
}

const LoginForm: React.FC<ChildProps> = ({
    onSubmit,
    emailLabel,
    passwordLabel
    }) => {
    
    const validationSchema =
        Yup.object().shape({
            email: Yup.string()
            // TODO add regex for password
                .email('Please enter a valid email')
                .required("Please enter an email address"),
            password: Yup.string()
                .required('Please enter a password'),
        })

    const initialValues:LoginFormData = {
        email: '', 
        password: '',
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
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div >
                                        <label htmlFor = "email_input" className = {`${errors.email && touched.email ?'error':''}`}>{emailLabel}</label>
                                        <Field
                                            className = {`form-control ${errors.email && touched.email?'error':''}`}
                                            type="email"
                                            name="email"
                                            id = "email_input"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        <ErrorMessage name = "email">{(msg)=><div className = "error">{msg}</div>}</ErrorMessage>
                                    </div>
                                    <div>
                                        <label htmlFor = "password_input" className = {`${errors.password && touched.password ?'error':''}`}>{passwordLabel}</label>
                                        <Field
                                            id = "password_input"
                                            className = {`form-control ${errors.password && touched.password ?'error':''}`}
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                        <ErrorMessage name = "password">{(msg)=><div className = "error">{msg}</div>}</ErrorMessage>
                                    </div>
                                    <div className = "text-center mt-4">
                                        <button type="submit" className = "btn btn-block btn-primary" >Login</button>
                                    </div>
                                </Form>
                            )}
                    </Formik>
                </div>
            </div>
    );

}

export default LoginForm;
