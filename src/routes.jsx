import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SearchBar from './containers/searchbar'
import Video from './containers/video'
import indexRoute from './components/indexRoute'
import AboutMe from './components/aboutme'
import AboutSite from './components/aboutsite'

export default (
  <Route path="/" component={App}>
  	<IndexRoute component={indexRoute} />
  	<Route path="me" component={AboutMe} />
  	<Route path="site" component={AboutSite} />
  </Route>
);
