import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

const Signup = () =>{
    return(
        <>
        <p  className='backtologin text-center' style={{color:"#fff"}}>Back to <NavLink to ='/'>Login Page</NavLink></p>
        <div className='container border bg-white shadow-lg rounded p-3'>
            <h4 className='my-4 text-center text-muted'>Sign Up</h4>

            <div className='form-group'>
            <label for='username' className='input-label'><small>Full Name</small></label>
            <input type='text' className='form-control' name='username' />
            </div>

            <div className='form-group'>
            <label for='userid'><small>Email</small></label>
            <input type='email' className='form-control' name='userid' />
            </div>

            <div className='form-group'>
            <label for='pswrd'><small>Password</small></label>
            <input type='password' className='form-control' name='pswrd' />
            </div>
            <button className='btn btn-success btn-block' type='submit'>Sign Up</button>
           
        </div>
        </>

    )
}

export default Signup;