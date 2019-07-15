import React from "react";
import NavBar from "./components/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import GameList from './components/GameList.jsx'
// import Profile from "./components/Profile";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact />
          <Route path="/list" component={GameList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;