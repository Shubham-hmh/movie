import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

const loginSchema = yup.object({
  username: yup.string().required("Username is Required"),
  password: yup.string().required("password is Required"),
});
const Login = () => {
const [loginError, setLoginError] = useState("");
const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async(values) => {
     
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");

      if (
        values.username === storedUsername &&
        values.password === storedPassword
      ) {
        localStorage.setItem("loggedIn", "true");
        alert("Logged in successfully!");
        navigate("/Card")
      } else {
        setLoginError("Invalid username or password");
      }    

    },
  });
  return (
    <>
    <div className="d-flex justify-content-center"><h1>Please Login or SingUp for visit Site.</h1>
</div>
   
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Login</h3>
              <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                <input type="username" name="username" onChange={formik.handleChange("username")} onBlur={formik.handleBlur("username")} value={formik.values.username} placeholder='username' />
                <div className="error">
                  {formik.touched.username && formik.errors.username}
                </div>
                <input type="password" name='password' value={formik.values.password} onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")} placeholder='Password' />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <div className="d-flex mt-3 justify-content-center align-items-center gap-15">
                    <button className="button border-0" type='submit'>Login</button>
                    <Link to="/signup" className='button signup'>SingUp</Link>
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

export default Login