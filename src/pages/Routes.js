import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import Recruiting from '../components/Recruiting'
import Header from "../components/Header";
import Alumni from "../components/Alumni";

export default () => (
  <Router>
    <Route path="/" component={Header}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/alumni" component={Alumni}/>
    <Route exact path="/portfolio" component={Portfolio}/>
    <Route exact path="/recruiting" component={Recruiting}/>
  </Router>
)
