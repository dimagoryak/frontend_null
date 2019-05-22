import * as React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import Home from './containers/home';
import NotFound from './component/NotFound';
import SignIn from './containers/signIn';
import SignUp from './containers/signUp';
import { PrivateRoute, AuthRoute } from './CustomRoute';
import Item from './containers/newItem';
import GetItems from './containers/getAllItems';

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <AuthRoute path="/signIn" component={SignIn} />
        <AuthRoute path="/signUp" component={SignUp} />        
        <PrivateRoute path="/create" component={Item} />        
        <PrivateRoute path="/update/:id" component={Item} />
        <PrivateRoute path="/items" component={GetItems} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;