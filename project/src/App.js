 //import React from 'react';
import './App.css';
//import axios from 'axios'
//import ReactDOM from 'react-dom';
import Post from './component/Post';
import About from './component/About';
import Time from './component/Time';
//import Button from 'react-bootstrap/Button'
 

import {Route ,BrowserRouter as Router ,Switch ,Link} from 'react-router-dom';
 
import React,{useEffect, useState} from 'react';
 
 
export default function App() {
  return (
      <> 
      <Router>

      <nav>
         <ul>
          <li> <Link to='/' exact> Post </Link></li>
          <li> <Link to='/About'>About </Link></li>
          <li> <Link to='/Time'>Time </Link></li>
        </ul>
     </nav>   

     <TimeArea />
    

      
<br/>
<Switch>
<Route path='/' exact component={Post}/>
<Route path='/About' component={About}/>
<Route path='/Time' component={Time}/>
</Switch>
  
      </Router>
 
      </>

  );
}


function TimeArea(){

  const [theTime ,setTheTime]= useState(new Date().toLocaleTimeString())

 const date= useState(new Date().toLocaleDateString())

useEffect(()=>{
 const interval= setInterval(()=> setTheTime(new Date().toLocaleTimeString()),1000)

 return()=> clearInterval(interval)

},[])
 
  return ( 
    <>
  <h5 className='time'>The Current Time is: {theTime}.and The Date is: {date}.</h5>

  </>)

}
 


