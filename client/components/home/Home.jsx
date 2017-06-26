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
			</div>
		)
	}
}

export default Home;
