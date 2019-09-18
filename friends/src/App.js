import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import NavBar from "./components/NavBar"
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendList from './components/FriendList'
import AddFriend from './components/AddFriend'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/addFriend' component={AddFriend} />
      <PrivateRoute exact path='/friendlist' component={FriendList} />
    </div>
  );
}

export default App;
