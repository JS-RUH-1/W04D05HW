import logo from './logo.svg';
import './App.css';
import Weather from './Componants/Weather';
import PostsComponents from './Componants/PostsComponents';
import NavBar from './Componants/NavBar';
import AboutUs from './Componants/AboutUs';
import * as ReactBootStrap from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
    <NavBar/>
    <h3>This website for Asia Timing</h3>
    </div>
  );
}

export default App;
