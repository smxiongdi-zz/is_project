import React from 'react';
import { Switch, Route } from 'react-router-dom';

class EditProfile extends React.Component {
	constructor() {
		super()

		this.state = {
		}

	}

	componentDidMount() {

		// load profile API onto edit fields

	}

	handleProfileEdit (...args) {

		// pass args to profile edit API

	}

	handleSubmit (...args) {

	}

	render() {
		return (
			<div>
				<h2>Edit Profile view </h2>
				<div className="form-group row">
					<label for="name_field" className="col-2 col-form-label">Profile Name</label>
					<div className="col-10">
						<input className="form-control" type="text" value={this.props.profile.profile_name} id="profile_name_field"/>
					</div>
				</div>
				<div className="form-group row">
					<label for="loc_field" className="col-2 col-form-label">Location</label>
					<div className="col-10">
						<input className="form-control" type="text" value={this.props.profile.loc} id="loc_field"/>
					</div>
				</div>
				<div className="form-group row">
					<label for="lang_native_field" className="col-2 col-form-label">Native language(s)</label>
					<select id="lang_native" className="custom-select">
						<option selected>{this.props.profile.lang_native}</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>
				<div className="form-group row">
					<label for="lang_learning_field" className="col-2 col-form-label">Learning language(s)</label>
					<select id="lang_learning" className="custom-select">
						<option value={this.props.profile.lang_learning}>{this.props.profile.lang_learning}</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>
			</div>
		)
	}
}

export default EditProfile;
