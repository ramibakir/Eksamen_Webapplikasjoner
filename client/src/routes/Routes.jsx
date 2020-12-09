import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Offices from '../pages/Offices';
import Articles from '../pages/Articles';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import OfficeDetailedView from '../pages/OfficeDetailedView';
import ArticleDetailedView from '../pages/ArticleDetailedView';
import CreateNewArticle from '../pages/CreateNewArticle';

const AdminRoutes = ({ children, ...rest }) => {
  const { isLoggedIn, isAdmin, isLoading } = useAuthContext();
  return (
    <Route
      {...rest}
      render={() => isLoggedIn && isAdmin && !isLoading && children}
    />
  );
};

const AuthenticatedRoutes = ({ children, ...rest }) => {
  const { isLoggedIn, isLoading } = useAuthContext();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn && !isLoading ? (
          <div>{children}</div>
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/offices">
          <Offices />
        </Route>
        <Route exact path="/articles">
          <Articles />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/offices/:id">
          <OfficeDetailedView />
        </Route>
        <Route path="/articles/:id">
          <ArticleDetailedView />
        </Route>
        {/* TODO replace /newarticle with /:id */}
        <AdminRoutes path="/create">
          <CreateNewArticle />
        </AdminRoutes>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
