import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Offices from '../pages/Offices';
import Articles from '../pages/Articles';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import OfficeDetailedView from '../pages/OfficeDetailedView';
import ArticleDetailedView from '../pages/ArticleDetailedView';
import CreateNewArticle from '../pages/CreateNewArticle';

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
        <Route path="/articles/newarticle">
          <CreateNewArticle />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
