<<<<<<< HEAD
import React,{useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import Main from './Main';




function App() {

const [userlogged, setLogged] = useState(false)

  return (
   <div className="App">
  <div className="Left"> 
< Home/>
</div>
 <div className="Right">
 {!userlogged &&<Login setLogged={setLogged}/>}

 </div>
 
 {userlogged &&<Main/>}
  
   
     
     

</div>

  );
  
 
  
=======
import React from "react";
//import logo from './logo.svg';
import "./App.css";
//import {useTable} from "react";
import Login from "./Login";
import Home from "./Home";

function App() {
    return ( <
        div >
        <
        Login / >
        <
        Home / >
        <
        div className = "form-group" >
        <
        div className = "container" >
        <
        input type = "search"
        className = "form-control px-4"
        placeholder = "Enter your city..." /
        >
        <
        /div>{" "} <
        /div>{" "} <
        div className = "click-me" >
        <
        div className = "search-b" >
        <
        input type = "submit"
        className = "search-weather btn btn-success "
        value = "Search" /
        >
        <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
>>>>>>> d6f1ac6b1b739eeccedf1d3e1089984046722b5d
}

export default App;