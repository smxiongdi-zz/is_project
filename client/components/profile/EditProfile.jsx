import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { editProfile } from '../../lib/profile/editProfile.jsx';

class EditProfile extends React.Component {
	constructor() {
		super()

		this.state = {
			lang_selection: [ "English", "French", "Spanish", "Chinese", "German", "Russian" ],
			sex: ["Male", "Female"]
		}
		this.handleEditProfile = this.handleEditProfile.bind(this)
	}

	componentDidMount() {

		// load profile API onto edit fields

	}


	handleEditProfile () {
		// pass args to profile edit API
		editProfile(this.props.profile)
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
						<input className="form-control" type="text" onChange={this.props.handleProfileNameChange} value={this.props.profile.profile_name} id="profile_name_field"/>
					</div>
				</div>
				<div className="form-group row">
					<label for="loc_field" className="col-2 col-form-label">Location</label>
					<div className="col-10">
						<input className="form-control" type="text" onChange={this.props.handleLocationChange} value={this.props.profile.loc} id="loc_field"/>
					</div>
				</div>
				<div className="form-group row">
					<label for="lang_native_field" className="col-2 col-form-label">Native language(s)</label>
					<select id="lang_native" className="custom-select" onChange={this.props.handleLangNativeChange} value={this.props.profile.lang_native}>
						<option selected>{this.props.profile.lang_native}</option>
						{this.state.lang_selection.map((x) => <option value = {x}>{x}</option>)}
					</select>
				</div>
				<div className="form-group row">
					<label for="lang_learning_field" className="col-2 col-form-label">Learning language(s)</label>
					<select id="lang_learning" className="custom-select" onChange={this.props.handleLangLearningChange} value={this.props.profile.lang_learning}>
						<option selected>{this.props.profile.lang_learning}</option>
						{this.state.lang_selection.map((x) => <option value = {x}>{x}</option>)}
					</select>
				</div>
				<div className="form-group row">
					<label for="sex_field" className="col-2 col-form-label">Gender</label>
					<select id="sex" className="custom-select" onChange={this.props.handleSexChange} value={this.props.profile.sex}>
						<option selected>{this.props.profile.sex}</option>
						{this.state.sex.map((x) => <option value = {x}>{x}</option>)}
					</select>
				</div>
				<div className="form-group row">
					<label for="bday_field" className="col-2 col-form-label">Date</label>
					<div className="col-10">
						<input className="form-control" type="date" onChange={this.props.handleBirthdayChange} value={this.props.profile.bday} id="bday_select"/>
					</div>
				</div>
				<button type="submit" className="btn btn-primary" onClick={this.handleEditProfile}>Submit Changes</button>
			</div>
		)
	}
}

export default EditProfile;
