import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import indexRoute from './components/indexRoute'
import AboutSite from './components/aboutsite'
import YouTubeApi from './components/you-tube-api'

export default (
  <Route path="/" component={App}>
  	<IndexRoute component={indexRoute} />
  	<Route path="site" component={AboutSite} />
  	<Route path="youtube" component={YouTubeApi} />
  </Route>
);
