import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import YouTube from 'youtube-api-search';
import _ from 'lodash';
import { setYTURL } from '../actions/index'
import styles from '../../style/video.css'

const API_KEY = 'AIzaSyCH4KT8W-Ub4eBZfXi3kqjcvplrjxVGdPM';

class Video extends Component {
	
	render(){
		var self = this;
		var videoTerm;
		if(this.props.term===''){
			videoTerm = 'taylor swift';
		}else{
			videoTerm = this.props.term;
		}
		YouTube({key: API_KEY, term: videoTerm}, function(videos){
			var video = videos[0];
			self.props.setYTURL(video)
		})

		return (
    	<div className={styles.video}>
      		<div className={styles.aspect}>
       		 <iframe className={styles.aspiframe} src={this.props.url}></iframe>
      		</div>
    	</div>
  		);
	}
}


function mapStateToProps(state) {	
	return{
		term: state.video.term,
		url: state.video.url
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setYTURL: setYTURL }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Video);