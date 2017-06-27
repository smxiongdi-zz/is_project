import React from 'react';
import { Switch, Route } from 'react-router-dom';

class EditProfile extends React.Component {
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

		// load profile API onto edit fields

	}

	handleProfileEdit = (...args) => {

		// pass args to profile edit API

	}

	handleSubmit = (...args) => {

	}

	render() {
		return (
			<div>
				<h2>Edit Profile view </h2>
				<Switch>
					{ /* <Route exact path = '/' component = { Profile }/>
					<Route exact path = '/edit' component = { MyEditProfileEdit }/>
					<Route path = '/view/:num' component = { EditProfileView }/> */ }
				</Switch>
			</div>
		)
	}
}

export default EditProfile;
