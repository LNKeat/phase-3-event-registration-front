import React from 'react'
import { Route, Switch } from "react-router-dom"

import { Header } from './Components';
import { Home } from './Pages';
// import './App.scss';


function App() {
  return (
    <div id="App-wrapper">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
