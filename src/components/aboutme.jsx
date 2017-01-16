import React, { Component } from 'react';
import styles from '../../style/aboutme.css'

class aboutMe extends Component {
	render(){
		return(
			<div className={styles.div}>
			<h1 className={styles.title}>
				About Me
			</h1>
			<p className={styles.p}>My name is Chris Andrews and I created this website to show off
			some of my frontend skills.<br/>
			I have been working at Walmart for a little over a year now, and have been a 
			software developer for about a year and a half.<br/>
			I am most experienced in Java, AngularJS, ReactJS, and NodeJS, but I consider 
			myself a jack of all trades and a quick learner.<br/>
			I'm committed to Test Driven Development, CD/CI, and in general getting things
			done the right way.<br/>
			If you feel like knowing more you can check out my resume: <br/>
			Or you can just contact me directly any of the ways below:
			</p>
			</div>
		)
	}
}

export default aboutMe;