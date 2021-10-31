import React from 'react'
import Header from './components/header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/home';
import AboutUs from './components/aboutUs';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
