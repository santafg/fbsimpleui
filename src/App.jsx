import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
