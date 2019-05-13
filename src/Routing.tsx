import * as React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import Home from './containers/home';
import NotFound from './component/NotFound';
import SignIn from './containers/signIn';
import SignUp from './containers/signUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;