import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ConnectedHomePage from '../components/HomePage';
import ProtectedRoutes from './protectedRoutes';
import Footer from '../views/Footer';
import Navbar from '../components/NavbarContainer';
import ConnectedLogin from '../components/Login';
import Article from '../components/Article';
import NotFound from '../views/NotFound';

/**
 * @function Routes - A JSX wrapper for all the app's routes
 * @returns {BrowserRouter} - The combination of all the routes in the app
 * @exports Routes
 */
function Routes() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" component={ConnectedHomePage} exact />
          <Route path="/login" component={ConnectedLogin} exact />
          <Route path="/user" component={ProtectedRoutes} />
          <Route path="/" component={ConnectedHomePage} exact />
          <Route path="/article/:slug" component={Article} />
          <Route path="*" component={NotFound} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Routes;
