import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import UserDetail from './components/userDetails';

function App() {

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/user" exact component={User} />
                    <Route path="/user/:id" component={UserDetail} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;