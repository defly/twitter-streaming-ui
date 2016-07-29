import React from 'react';
import { Route, IndexRedirect, Redirect } from 'react-router';
import App from './containers/App';
import TwitterDetails from './containers/TwitterDetails';

export default (
  <Route path="/" component={App}>
    <Redirect to="/twitter-details" />
    <Route path="twitter-details" component={TwitterDetails} />
  </Route>
);
