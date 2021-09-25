import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import NevBlog from "../pages/NewBlog";
import DetailsCard from '../pages/DetailsCard';
import NotFound from '../pages/NotFound';
import Navbar  from "../components/Navbar" 
import Home from '../pages/Home';

const RouterApp = () => {
    return (
    <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/nev-blog" component={NevBlog}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route path="/detail" component={DetailsCard}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
    )
}

export default RouterApp
