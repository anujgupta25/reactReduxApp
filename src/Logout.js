import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios  from 'axios';

const Logout = () =>{
    const [user, setUser] = useState({
       id: localStorage.getItem('tokenid2')

    });
    const {id} = user;

    const logOut = async() =>{
        //const id = localStorage.getItem('tokenid');
        const result = await axios.post(`http://localhost/logout.php/`, user);
        console.log(result);
    //    <redirect to='/' />
       }
       logOut();
const history = useHistory();
localStorage.setItem('tokenid' ,'');
history.push('/');
    return(
        <p>loggedout !!</p>
    )
}

export default Logout;