import React, { Component } from 'react';

import Landing from './landing';
import Video from '../containers/video';
import SearchBar from '../containers/searchbar';

class indexRoute extends Component {
	render(){
		return(
			<div>
				<Landing/>
			</div>
		)
	}
}

export default indexRoute;