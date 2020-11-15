import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Component/Home/Home';
import OurClasses from './Component/OurClasses/OurClasses';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ourClasses">
          <OurClasses />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
