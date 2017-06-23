import React from 'react';
import { Switch, Route } from 'react-router-dom';

class Community extends React.Component {
	render() {
		return (
			<div>
				<h2>Community view </h2>
				<Switch>
					{ /* <Route exact path = '/' component = { MyCommunity }/>
					<Route exact path = '/edit' component = { MyCommunityEdit }/>
					<Route path = '/view/:num' component = { CommunityView }/> */ }
				</Switch>
			</div>
		)
	}
}

export default Community;
