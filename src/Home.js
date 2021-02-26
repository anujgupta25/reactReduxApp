import React,{useState} from 'react';
import { NavLink, Redirect, useHistory, useParams } from 'react-router-dom';
import LoginUser from './Login.js';
import axios from 'axios';

const Home = ()=>{
    const history = useHistory();
    const  {token} = useParams();
    if(localStorage.getItem('tokenid')=='' || localStorage.getItem('tokenid')===null){
        history.push('/');
      }
    const[user, setUser]= useState({
      token:''
    });
   
    return(
    <>
    <ul className=" pl-5 nav w-100 bg-light">
        
        <li className="nav-item">
           <NavLink exact activeClassName='active_class' to='/home'>Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink exact activeClassName='active_class' to='/users'>Users</NavLink>    
        </li>
    </ul>
    <NavLink to='/Adduser'>
    <button style={{position:'absolute', right:'15%', top:'15px'}} className='btn btn-sm btn-dark'>Add New</button>
    </NavLink>
    <NavLink to='/logout'>
    <button style={{position:'absolute', right:'5%', top:'15px'}} className='btn btn-sm btn-danger'>Logout</button>
    </NavLink>
    <br/>
    
    </>
    );
}

export default Home;