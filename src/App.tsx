import React from 'react';
import {
  HashRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom';
import routes from './config/routes';
import ProgressRoute from './components/ProgressRoute';
import { ProvideAuth } from './utils/authHooks';

const App: React.FC = () => {
  return (
    <ProvideAuth>
      <Router>
        <div id="nav">
          <NavLink exact to="/">
            Home
          </NavLink>{' '}
          <NavLink exact to="/login">
            Login
          </NavLink>
        </div>
        <Switch>
          {routes.map((route) => (
            <ProgressRoute key={route.path} {...route} />
          ))}
          <Route path="*" render={() => <Redirect to="/login" />}></Route>
        </Switch>
      </Router>
    </ProvideAuth>
  );
};

export default App;
