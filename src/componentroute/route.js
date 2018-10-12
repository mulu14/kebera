import React from 'react';
import { Switch, Route } from 'react-router'
import Home from './../components/home/home'
import About from './../components/about/about'
import Mission from './../components/mission/mission'
import Login from './../components/login/login'
import Register from './../components/register/register'
import StartPage from './../components/startpage/startpage'
import Admin from './../components/admin/admin'


const  ComponentRoute = () => {
        return (
           <Switch>
               <Route  exact={true} path="/" component={Home}/>
               <Route path="/about" component={About}/>
               <Route path="/mission" component={Mission}/>
               <Route path="/login" component={Login}/>
               <Route path="/admin" component={Admin} />
               <Route path="/register" component={Register}/>
               <Route path="/start" component={StartPage}/>
           </Switch>
        );
    }



export default ComponentRoute;
