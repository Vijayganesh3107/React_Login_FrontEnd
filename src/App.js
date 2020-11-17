import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupPage from './pages/SignupPage';
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import routes from './routes';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupAuthPage from './pages/SignupAuthPage';
import ForgetPassword from './pages/ForgetPassword';
import ChangePassword from './pages/ChangePassword';



function App() {
  return (
    <>
    <Switch>
    <Route path={routes.changepassword}>
      <ChangePassword/>
      </Route>
    <Route path={routes.forgetpassword}>
      <ForgetPassword/>
      </Route>
    <Route path={routes.authsignup}>
      <SignupAuthPage/>
      </Route>
      <Route path={routes.signup}>
      <SignupPage></SignupPage>
      </Route>
      <Route path={routes.login}>
      <LoginPage />
      </Route>
      <Route path={routes.dashboard}>
      <Dashboard></Dashboard>
      </Route>
      <Route path={routes.home}>
        <HomePage></HomePage>
      </Route>
      </Switch>
    </>
  );
}

export default App;
