import React from 'react';
import Login from './Login.js';
import Signup from './Signup.js';
import NotFound from './NotFound.js';
import Home from './Home.js';
import Users from  './Users.js';
import Adduser from  './Adduser.js';
import {Switch, Route} from 'react-router-dom';
import Edituser from './Edituser.js';
import Logout from './Logout.js';
import MyPage from './MyPage.js';

const App = () =>{
  return(
    <>
    <MyPage />
    <Switch>
    <Route exact path='/' component={Login} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/home' component={Home} />
    <Route exact path='/users' component={Users} />
    <Route exact path='/Adduser' component={Adduser} />
    <Route exact path='/users/edit/:id' component={Edituser} />
    <Route exact path='/logout' component={Logout} />
    <Route exact path='' component={NotFound} />
    </Switch>
    </>
  );
}
export default App; 