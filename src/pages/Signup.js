import React from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useNavigate } from 'react-router-dom';

const signUpSchema = yup.object({
    username: yup.string().required("User Name is Required"),
    password: yup.string().required("password is Required"),
});

const Signup = () => {
    const navigate =useNavigate();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: "",
        },
        validationSchema: signUpSchema,
        onSubmit: async(values) => {
            localStorage.setItem("username", values.username);
            localStorage.setItem("password", values.password);
            alert("Sign up successful!");
            navigate("/")
        },
    });


    return (
        <>
           
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Sign Up</h3>
                            <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                                <input  type="name" name="username" value={formik.values.username} onChange={formik.handleChange("username")} onBlur={formik.handleBlur("username")} placeholder='First Name' />
                                <div className="error">
                                    {formik.touched.username && formik.errors.username}
                                </div>
                               
                                <input type="password" name='password' value={formik.values.password} onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")} placeholder='Password' />
                                <div className="error">
                                    {formik.touched.password && formik.errors.password}
                                </div>
                                <div>
                                    <div className="d-flex mt-3 justify-content-center align-items-center gap-15">
                                        <button className="button border-0">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup