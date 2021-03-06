import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/register" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset_password" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
