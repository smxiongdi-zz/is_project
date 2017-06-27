import React from 'react';
import { Switch, Route } from 'react-router-dom';

class Home extends React.Component {
	render() {
		return (
			<div>
				<h2>Home view </h2>
				<Switch>
					{ /* <Route exact path = '/' component = { MyHome }/>
					<Route exact path = '/edit' component = { MyHomeEdit }/>
					<Route path = '/view/:num' component = { HomeView }/> */ }
				</Switch>
				<p>Still deciding what to put here...</p>
				<h3>Welcome to exlang</h3><br /><h4>a <i>free</i> language exchange platform that will always remain free.</h4>
			</div>
		)
	}
}

export default Home;
