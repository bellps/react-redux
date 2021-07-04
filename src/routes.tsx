import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Artist from './components/Artists';

const Routes = () => (
  <Switch>
    <Route path="/artists/:id" exact component={Artist} />
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
