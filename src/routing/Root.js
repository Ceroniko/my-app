import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../home/Home.js';
import Testing from '../testing/Testing';
import App from '../app/App.js';
import Results from '../results/Results';


const Root = () => (
        <Router>
            <div id={'router-wrapper'}>
                <Switch>
                    <Route exact path="/" component = {Home} />
                    <Route exact path='/testing/:id' component = {App}/>
                    <Route path="/testing" component = {Testing} />
                    <Route path="/results" component = {Results} />
                </Switch>
            </div>
        </Router>
);

export default Root;