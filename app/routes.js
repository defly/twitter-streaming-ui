import React from 'react';
import { Route, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import App from './containers/App';
import TwitterDetails from './containers/TwitterDetails';
import Workplace from './containers/Workplace';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Workplace} />
    <Route path="twitter-details" component={TwitterDetails} />
  </Route>
);
