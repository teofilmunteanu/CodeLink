import React from 'react'
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import JoinRoom from "./JoinRoom";
import CreateRoom from "./CreateRoom";


function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/join"} component={JoinRoom} />
          <Route path={"/create"} component={CreateRoom} />
        </Switch>
      </div>
    </div>
  );
}

export default App