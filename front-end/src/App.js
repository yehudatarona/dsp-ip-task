import React from 'react';
import './App.css';
import AppMission from './dvr/appMission';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './dvr/nav';
import NewMission from './dvr/newMission';
import CreatChannel from './dvr/createToMission';


function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
      <Route exact path={"/"} component={AppMission} />
      <Route exact path={"/add-mission/"} component={NewMission} />
      <Route exact path={"/add-channel/"} component={CreatChannel} />
      
      </Router>
    </div>
  );
}

export default App;
