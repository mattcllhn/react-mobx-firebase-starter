import React from "react";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// import { Route } from 'react-router-dom'
import { Router } from 'react-router'
import navigationStore from '../stores/navigationStore'

import SignupPage from "../pages/auth/signup";
import ForgotPasswordPage from "../pages/auth/forgotPassword";
import LandingPage from "../pages/landing/landing";
import DashboardPage from "../pages/dashboard/dashboard";
import LoginPage from "../pages/auth/login";
import ProtectedRoute from "../components/protected-route/protected-route";

const AppRouter: React.FC = (props) => {
  return (
    <Router history = {navigationStore.history}>
      <Switch>
        <Route exact path="/signup">
          <SignupPage/>
        </Route>
        <Route exact path="/forgot-password">
          <ForgotPasswordPage/>
        </Route>
        <Route exact path="/login" component = {LoginPage} />
        <ProtectedRoute exact path="/dashboard" component = {DashboardPage} />
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route>
          <Redirect to = "/login"/>
        </Route>
      </Switch>
  </Router>  
  );
}

export default AppRouter;
