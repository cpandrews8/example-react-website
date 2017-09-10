import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { toggleSideBar } from '../actions/index';
import Glyphicon from 'react-icons/lib/fa/align-justify';

import styles from '../../style/sidebar.css'

class SideBar extends Component {

	toggleVisible() {
		this.props.toggleSideBar(this.props.visible)
	};

	render(){
		let className, clazzName, buttonClass
		if(this.props.visible){
			className = styles.visible
			clazzName = styles.sidebarvisible
			buttonClass = styles.visible
		}else{
			className = styles.hidden
			clazzName = styles.sidebarhidden
			buttonClass = styles.button
		}

			return(
				<ul onMouseEnter={() => this.toggleVisible()} 
				onMouseLeave={() => this.toggleVisible()} className={clazzName}>
					<li className={buttonClass}><Glyphicon/></li>
					<Link to='/' className={styles.link}>
						<li className={className}>Home</li>
					</Link>
					<Link to='me' className={styles.link}>
						<li className={className}>About Me</li>
					</Link>
					<Link to='/site' className={styles.link}>
						<li className={className}>About This Site</li>
					</Link>
					<Link to='/youtube' className={styles.link}>
						<li className={className}>YouTube API</li>
					</Link>
				</ul>
				)

	}

};

function mapStateToProps(state) {
  return {
    visible: state.toggle.visible
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleSideBar: toggleSideBar }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
