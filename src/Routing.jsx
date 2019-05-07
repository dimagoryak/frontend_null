import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import Home from './containers/home/index';
import NotFound from './component/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;