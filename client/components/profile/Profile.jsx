import React from 'react';
import { Switch, Route } from 'react-router-dom';

class Profile extends React.Component {
	render() {
		return (
			<div>
				<h2>Profile view </h2>
				<Switch>
					{ /* <Route exact path = '/' component = { MyProfile }/>
					<Route exact path = '/edit' component = { MyProfileEdit }/>
					<Route path = '/view/:num' component = { ProfileView }/> */ }
				</Switch>
			</div>
		)
	}
}

export default Profile;
