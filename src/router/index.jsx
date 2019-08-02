import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';


const login = asyncComponent(() => import("@/pages/login/login"));
const home = asyncComponent(() => import("@/pages/home/home"));
const about = asyncComponent(() => import("@/pages/about/about"));

export default class RouteConfig extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={login}></Route>
          <Route path='/home' component={home}></Route>
          <Route path='/about' component={about}></Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}