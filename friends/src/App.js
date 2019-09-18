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
      <Route exact path='/login' component={Login} />
      <PrivateRoute path='/friendlist' component={AddFriend} />
      <PrivateRoute path='/friendlist' component={FriendList} />
    </div>
  );
}

export default App;
