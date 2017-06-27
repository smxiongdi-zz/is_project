import React from 'react';
import { Switch, Route } from 'react-router-dom';

class MyProfile extends React.Component {
	constructor() {
		super()

		this.state = {
			profile_name: '',
			lang_native: '',
			lang_learning: '',
			bday: '',
			sex: '',
			pic: '',
			loc: ''
		}

	}

	componentDidMount() {

		// load profile API

	}

	render() {
		return (
			<div>
				<h2>My Profile view </h2>
				<Switch>
					{ /* <Route exact path = '/' component = { MyProfile }/>
					<Route exact path = '/edit' component = { MyProfileEdit }/>
					<Route path = '/view/:num' component = { ProfileView }/> */ }
				</Switch>
			</div>
		)
	}
}

export default MyProfile;
