import React,{useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';


const Edituser = () => {

    const history = useHistory();
    if(localStorage.getItem('tokenid')=='' || localStorage.getItem('tokenid')===null){
        history.push('/');
      }
    const {id} = useParams();
    const [user, setUser] = useState({
        name : '',
        email : '',
        mobile : ''
    });
    const {name, email, mobile} = user;
    
const onInputChange = (e)=>{
    setUser({...user,[e.target.name]: e.target.value})
  }
    useEffect(() => {
      loadUser();
    }, []);

  const loadUser = async () => {
    const result =  await axios.get(`http://localhost/edituser.php/?id=${id}`);
    setUser(result.data[0]);
 }
const submitFunc = async e =>{
    e.preventDefault();
    //alert(id);
   await axios.post(`http://localhost/update.php/?id=${id}`, user);
  
   history.push('/users');

}

return(
    <div className='container mt-5 d-flex justify-content-center '>
         <div className='col-md-6 border shadow-lg p-4'>
            <h3 className='mb-5  text-center text-muted'>Edit User</h3>
        
                <div className='form-group form-group-sm'>
                    <input
                    type='text'
                    placeholder='Enter Name'
                    className='form-control'
                    name='name'
                    onChange={e => onInputChange(e)}
                    value={user.name}
                     />
                </div>

                <div className='form-group form-group-sm'>
                    <input
                    type='text'
                    placeholder='Enter Email'
                    className='form-control'
                    name='userid'
                    onChange={e => onInputChange(e)}
                    value={user.userid}
                     />
                </div>

                <div className='form-group form-group-sm'>
                    <input
                    type='text'
                    placeholder='Mobile'
                    className='form-control'
                    name='mobile'
                    onChange={e => onInputChange(e)}
                    value={user.mobile}
                     />
                </div>
                <button onClick={submitFunc} className='btn btn-primary btn-block'>Submit</button>
        
            </div>
    </div>
)
}

export default Edituser;