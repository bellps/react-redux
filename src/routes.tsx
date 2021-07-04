import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Artist from './components/Artists';

const Routes = () => {
  return(
    <Switch>
      <Route path='/artists/:id' exact component={Artist}></Route>
      <Route path='/' component={Home}></Route>
    </Switch>
  )
}

export default Routes;