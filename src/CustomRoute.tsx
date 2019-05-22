import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props: any) => (
            localStorage.getItem('JWToken') != undefined
                ? <Component {...props} />
                : <Redirect to="/signIn" />
        )} />
    );
}

const AuthRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props: any) => (
            localStorage.getItem('JWToken') == undefined
                ? <Component {...props} />
                : <Redirect to="/" />
        )} />
    );
}

export {
    PrivateRoute,
    AuthRoute
};

