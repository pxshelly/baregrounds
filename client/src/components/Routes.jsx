import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from './FrontPage.jsx';
import Intro from './Intro.jsx';
import SaveOurWorld from './SaveOurWorld.jsx';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route path="/intro" component={Intro} />
      <Route path="/saveourworld" component={SaveOurWorld} />
    </Switch>
  )
}

export default Routes;