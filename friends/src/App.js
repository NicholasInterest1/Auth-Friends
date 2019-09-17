import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Log-in</Link>
        </nav>
        <nav>
          <Link to="/friendslist">Friends List</Link>
        </nav>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/friendslist" component={FriendsList} />
      </Switch>
    </Router>
  );
}

export default App;
