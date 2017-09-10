import React, { Component } from 'react';
import Glyphicon from 'react-icons/lib/go/chevron-up';
import styles from '../../style/landing.css'

class Landing extends Component {
	render(){
		return(
			<div className={styles.div}>
				<p className={styles.starthere}>
					<Glyphicon/> start here
				</p>
				<h1 className={styles.title}>
					ChrisAndrews.io
				</h1>
				<p className={styles.subtitle}>
					a developer playground
				</p>
			</div>
		)
	}
}

export default Landing;