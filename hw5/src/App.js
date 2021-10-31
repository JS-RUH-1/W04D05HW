

import './App.css';
import NavBar from './NavBar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './About';
import Post from './Post';
import Weather from './Weather';



function App() {
  return (
    <div className="App">
  
       <Router>
    
          <NavBar />
          <Weather></Weather><br/><br/>

              <Switch>
                <Route exact path="/About">
                   <About />
                </Route>
                <Route exact path="/Post">
                   <Post />
                </Route>
              </Switch>

      </Router>
  
    </div>
  );
}

export default App;
