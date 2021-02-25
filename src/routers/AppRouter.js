import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { DashboardRouter } from './DashboardRouter';
import { LoginScreen } from '../pages/login/LoginScreen';

export const AppRouter = () => {

  const { user } = useContext( AuthContext );

  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={ LoginScreen }
          isAuthenticated={ user.logged }
        />

        <PrivateRoute
          path="/"
          component={ DashboardRouter }
          isAuthenticated={ user.logged }
        />
      </Switch>
    </Router>
  )
}
