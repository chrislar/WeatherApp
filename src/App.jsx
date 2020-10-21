import React from "react";

import "./App.css";
import Logout from "./Logout";
import Home from "./Home";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />{" "}
                <Route path="/Main" component={Main} />{" "}
                <Route path="/Logout" component={Logout} />{" "}
            </Switch>{" "}
        </Router>
    );
}

export default App;
