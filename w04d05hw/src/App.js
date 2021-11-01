import './App.css';
import Post from './components/Post';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About';
import Comment from './components/Weather';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Switch>
            <Route path="/Post">
              <Post />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/Weather">
              <Comment />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
