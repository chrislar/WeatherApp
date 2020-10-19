import React, { useState } from "react";
//import logo from './logo.svg';
import "./App.css";

import Home from "./Home";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />{" "}
                <Route path="/Main" component={Main} />{" "}
            </Switch>{" "}
        </Router>
    );
}

export default App;
