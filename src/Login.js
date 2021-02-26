import React, {useState, useEffect} from 'react';
import {useHistory, redirect} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';



    const LoginUser = () =>{
        const history = useHistory();

        if(localStorage.getItem('tokenid') || !localStorage.getItem('tokenid')===null){
            history.push('/users');
          }
       // const tokenValue = '';

        const [user, setUser] = useState({
            userid : '',
            password : '',
            tokenValue:''
        });

        const {userid, password} = user;
    
    useEffect(()=>{
       //console.clear(); 
    })

    //const func = () => Math.random().toString(25).substr(2);

    // const theToken = () =>{
    // const setToken = localStorage.setItem("tokenid", func());
    // const outputToken = localStorage.getItem('tokenid');
    // return outputToken;
    // }

    //console.log(theToken());
    
    const onInputChange = (e)=>{
        setUser({...user,[e.target.name]: e.target.value})
      }
        
    const submitFunc = async e =>{
        e.preventDefault();
       const result = await axios.post("http://localhost/loginCheck.php", user);    

       const tokenV = result.data.token;
       localStorage.setItem('tokenid2',result.data.id);
       localStorage.setItem('tokenid',tokenV);
       
       (result.data.status===false)? (history.push('/')): (setUser({tokenValue:tokenV}))

    //   // const tokenVal = user.tokenValue;
    //    localStorage.setItem('tokenid',result.data.message);
    //    //document.getElementById('errmsg').innerHTML = result.data.message;
      
    }
    return(
        <>
        
        <div className='container mt-5 bg-white '>
        <form onSubmit={submitFunc}>
         <div className='row d-flex justify-content-center '>
         
            <div className='col-md-4 shadow-lg rounded p-3'>
            <h4 className='my-4 text-center text-muted'>Log in</h4>
            <div className='form-group'>
            <label for='userid'><small>Email </small></label>
            <input type='email'
             className='form-control' 
             name='userid'
             onChange={e => onInputChange(e)}
              />
            </div>

            <div className='form-group'>
            <label for='password' className='input-label'><small>{/* {user.tokenValue} */}password</small></label>
            <input type='password'
            className='form-control'
            name='password'
            onChange = {e =>onInputChange(e)}
               />
            </div> 
             <button className='btn btn-primary btn-block' type='submit'>Login</button>
             {/* <small><span id='errmsg' className='text-danger  font-weight-bold'>{result.data.message}</span></small> */}
           </div>

           </div>
           </form>
           </div>
        {/* <p className='mx-auto my-2 text-white text-center'><small> Or </small></p> */}
        {/* <NavLink to ='/signup'>
        <button className='btn btn-block btn-success'>Signup</button>
        </NavLink> */}

        </>
    )
}

export default LoginUser;