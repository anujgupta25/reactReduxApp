import {userRequest, userSuccess, userError} from './actions/Action.js';
import {AUTH_USER, AUTH_ERROR} from './actions/ActionType.js';
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';


const Users = () =>{

    const history = useHistory();

    if(localStorage.getItem('tokenid')=='' || localStorage.getItem('tokenid')===null){
      history.push('/');
    }
    
    const [user, setUser] = useState([]);
    useEffect(()=>{
        loadUsers();
    }, []);

       const deleteUser = async id =>{

          const Tvalue = localStorage.getItem('tokenid');

          const result =  await axios.post(
            `http://localhost/deleteuser.php/?id=${id}`,
            {},
            {
            headers :{
              'Authorization':`${Tvalue}`
            }
          })
        console.log(result);
      loadUsers();
    }

     const fetchUser=()=>{
      return function(dispatch){
          dispatch(userRequest())
      axios.get('http://localhost/api.php/')
      .then(response=>{
          const users = response.data.map(user=>user)
          // console.log(users);
          dispatch(userSuccess(users))
      })
      .catch(error=>{
          dispatch(userError(error.message))
      })
    }
    
    // const loadUsers = async ()=>{
    //     const result = await axios.get("http://localhost/api.php");
    //     setUser(result.data.reverse());
    //   }
    return(
        <>
        <table style={{width:'70%'}} className="table offset-md-3 border mt-5">
  <thead>
    <tr className='bg-dark text-white'>
      <th scope="col">#</th>
      <th scope="col">U_Id</th>
      <th scope="col">Name</th>
      <th scope="col">User ID</th>
      <th scope="col">Mobile</th>
      <th scope="col" className='text-center'>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        user.map((user, index)=>(
        <tr>
            <th>{index + 1}</th>
            <th className='text-muted'>{user.id}</th>
            <td>{user.name}</td>
            <td>{user.userid }</td>
            <td>{user.mobile}</td>
            <td className='text-center'>
                {/* <Link className='btn btn-sm mx-1 btn-primary'>View</Link> */}
                <Link to={`/users/edit/${user.id}`} className='btn btn-sm mx-1 btn-info'>Edit</Link>
                <Link onClick={() => deleteUser(user.id)} className='btn btn-sm mx-1 btn-warning'>Delete</Link>
            </td>
        </tr>

        ))}
  </tbody>
</table>
    </>
    )
}
  const mapStateToProps = (state)=>({
    loading : state.showReducer.loading,
    users : state.showReducer.users,
    error: state.showReducer.error
})

export default connect(mapStateToProps)(Users);