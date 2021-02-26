import React, {useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Adduser = () =>{
    const history = useHistory();
    if(localStorage.getItem('tokenid')=='' || localStorage.getItem('tokenid')===null){
        history.push('/');
      }
    const [user, setUser] = useState({
        name : '',
        email : '',
        mobile : ''
    });
    const {name, email, mobile} = user;
    

const onInputChange = (e)=>{
    setUser({...user,[e.target.name]: e.target.value})
  }
    

const submitFunc = async e =>{
    e.preventDefault();
   await axios.post("http://localhost/adduser.php", user);
   history.push('/users');

}

    return(
        <div className='container mt-5 d-flex justify-content-center '>
             <div className='col-md-6 border shadow-lg p-4'>
                <h3 className='mb-4  text-center text-muted'>Add User</h3>
                  <p className='text-center'><small>Hello , <strong>{user.name}</strong></small></p>
                  <p className='text-center text-muted mt-n3'><small>{user.email}</small></p>
                  <br />
                    <div className='form-group form-group-sm'>
                        <input
                        type='text'
                        placeholder='Enter Name'
                        className='form-control'
                        name='name'
                        onChange={e => onInputChange(e)}
                        // value={name}
                         />
                    </div>

                    <div className='form-group form-group-sm'>
                        <input
                        type='text'
                        placeholder='Enter Email'
                        className='form-control'
                        name='email'
                        onChange={e => onInputChange(e)}
                        // value={name}
                         />
                    </div>

                    <div className='form-group form-group-sm'>
                        <input
                        type='text'
                        placeholder='Mobile'
                        className='form-control'
                        name='mobile'
                        onChange={e => onInputChange(e)}
                        // value={name}
                         />
                    </div>
                    <button onClick={submitFunc} className='btn btn-primary btn-block'>Submit</button>
            
                </div>
        </div>
    )
}

export default Adduser;