import React from 'react'
import Header from './component/header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './component/home';
import AboutUs from "./component/aboutUs";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}>
            
          </Route>
          <Route path="/about" element={<AboutUs />}>
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;