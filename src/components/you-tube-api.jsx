import React, { Component } from 'react';
import Video from '../containers/video';
import SearchBar from '../containers/searchbar';

class YouTubeApi extends Component {
	render(){
		return(
			<div>
				<Video/>
				<SearchBar/>
			</div>
		)
	}
}

export default YouTubeApi;