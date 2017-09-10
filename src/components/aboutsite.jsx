import React, { Component } from 'react';
import styles from '../../style/aboutsite.css'

class aboutSite extends Component {
	render(){
		return(
			<div className={styles.div}>
				<h1 className={styles.title}>
					Technologies Used To Make This Site
				</h1>
				<div className={styles.mainbox}>
					<div className={styles.row}>
						<div className={styles.techboxtan}>
							<a href="https://facebook.github.io/react/" className={styles.a}>
							<h2 className={styles.techtitle}>React</h2>
							<p className={styles.p}>
							React (sometimes styled React.js or ReactJS) is an open-source 
							JavaScript library for building user interfaces.

							It is maintained by Facebook, Instagram and a community of 
							individual developers and corporations.
	 						According to JavaScript analytics service Libscore, 
	 						React is currently being used on the websites of...</p>
							</a>
						</div>
						<div className={styles.techboxpowder}>
							<a href="http://redux.js.org/" className={styles.a}>
							<h2 className={styles.techtitle}>Redux</h2>
							<p className={styles.p}>
							Redux is a predictable state container for JavaScript apps.

							It helps you write applications that behave consistently,
							run in different environments (client, server, and native),
							and are easy to test. On top of that, 
							it provides a great developer experience, 
							such as live code editing combined with a time traveling debugger.</p>
							</a>
						</div>
						<div className={styles.techboxtan}>
							<a href="https://webpack.github.io/" className={styles.a}>
							<h2 className={styles.techtitle}>Webpack</h2>
							<p className={styles.p}>
							Webpack is an open-source JavaScript module bundler. 
							Webpack takes modules with dependencies and generates static 
							assets representing those modules. 
							It takes the dependencies and generates a dependency graph allowing you to 
							use a modular approach for your web application development purposes.
							</p>
							</a>
						</div>
					</div>
					<div className={styles.row}>
						<div className={styles.techboxpowder}>
							<a href="https://developers.google.com/youtube/v3/docs/search" className={styles.a}>
							<h2 className={styles.techtitle}>YouTube Search API</h2>
							<p className={styles.p}>
							A search result contains information about a YouTube video, 
							channel, or playlist that matches the search parameters specified in an API request. 
							While a search result points to a uniquely identifiable resource, 
							like a video, it does not have its own persistent data.
							</p>
							</a>
						</div>
						<div className={styles.techboxtan}>
							<a href="https://mochajs.org/" className={styles.a}>
							<h2 className={styles.techtitle}>Mocha</h2>
							<p className={styles.p}>
							Mocha is a feature-rich JavaScript test framework running on Node.js 
							and in the browser, making asynchronous testing simple and fun. 
							Mocha tests run serially, allowing for flexible and accurate reporting, 
							while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.
							</p>
							</a>
						</div>
						<div className={styles.techboxpowder}>
							<a href="https://nodejs.org/en/" className={styles.a}>
							<h2 className={styles.techtitle}>Node.js</h2>
							<p className={styles.p}>
							Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
							Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
							Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
							</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default aboutSite;