import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { editMyProfile } from '../../redux/actions/credActions';

class EditProfilePage extends React.Component {
	constructor() {
		super()

		this.state = {
			lang_selection: [ "English", "French", "Spanish", "Chinese", "German", "Russian" ],
			sex: ["Male", "Female"],
			profile: { name: 'originalname', lang_native: [''], lang_learning: [''], bday: '', loc: '', sex: '', pic: '' }
		}
		this.handleEditName = this.handleEditName.bind(this);
		this.handleEditNative = this.handleEditNative.bind(this);	
		this.handleEditLearning = this.handleEditLearning.bind(this);	
		this.handleEditBday = this.handleEditBday.bind(this);	
		this.handleEditLoc = this.handleEditLoc.bind(this);	
		this.handleEditSex= this.handleEditSex.bind(this);	
		this.handleEditPic = this.handleEditPic.bind(this);	
		
		this.updateProfile = this.updateProfile.bind(this);
		this.handleEditProfile = this.handleEditProfile.bind(this)
	}

	componentDidMount() {

		// load profile API onto edit fields
		this.props.profile ? this.setState({profile: this.props.profile}) : this.setState({profile: this.props.fetchMyDetails()});

	}

	handleEditName(evt) { 
		var tempProf = this.state.profile;
		tempProf.name = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditNative(evt) { 
		var tempProf = this.state.profile;
		tempProf.lang_native= evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditLearning(evt) { 
		var tempProf = this.state.profile;
		tempProf.lang_learning= evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditBday(evt) { 
		var tempProf = this.state.profile;
		tempProf.bday = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditSex(evt) { 
		var tempProf = this.state.profile;
		tempProf.sex = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditLoc(evt) { 
		var tempProf = this.state.profile;
		tempProf.loc = evt.target.value;
		this.updateProfile(tempProf);
	}

	handleEditPic(evt) { 
		var tempProf = this.state.profile;
		tempProf.pic = evt.target.value;
		this.updateProfile(tempProf);
	}

	updateProfile(newProf) { this.setState({profile: newProf}) }

	handleEditProfile () {
		// pass args to profile edit API
		this.props.dispatch(editMyProfile(this.state.profile));
		this.props.fetchMyDetails();
		window.location.href='/p';
	}

	render() {
		return (
			<div>
				<h2>{this.props.title ? this.props.title : ''}</h2>
				<div className="form-group row">
					<label htmlFor="name_field" className="col-2 col-form-label">Profile Name</label>
					<div className="col-10">
						<input className="form-control" type="text" onChange={this.handleEditName} value={this.state.profile.name} id="profile_name_field"/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="loc_field" className="col-2 col-form-label">Location</label>
					<div className="col-10">
						<input className="form-control" type="text" onChange={this.handleEditLoc } value={this.state.profile.loc} id="loc_field"/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="lang_native_field" className="col-2 col-form-label">Native language(s)</label>
					<select id="lang_native" className="custom-select" onChange={this.handleEditNative} value={this.state.profile.lang_native}>
						<option selected>{this.state.profile.lang_native}</option>
						{this.state.lang_selection.map((x) => <option value = {x}>{x}</option>)}
					</select>
				</div>
				<div className="form-group row">
					<label htmlFor="lang_learning_field" className="col-2 col-form-label">Learning language(s)</label>
					<select id="lang_learning" className="custom-select" onChange={this.handleEditLearning} value={this.state.profile.lang_learning}>
						<option selected>{this.state.profile.lang_learning}</option>
						{this.state.lang_selection.map((x) => <option value = {x}>{x}</option>)}
					</select>
				</div>
				<div className="form-group row">
					<label htmlFor="sex_field" className="col-2 col-form-label">Gender</label>
					<select id="sex" className="custom-select" onChange={this.handleEditSex} value={this.state.profile.sex}>
						<option selected>{this.state.profile.sex}</option>
						{this.state.sex.map((x) => <option value = {x}>{x}</option>)}
					</select>
				</div>
				<div className="form-group row">
					<label htmlFor="bday_field" className="col-2 col-form-label">Date</label>
					<div className="col-10">
						<input className="form-control" type="date" onChange={this.handleEditBday} value={this.state.profile.bday} id="bday_select"/>
					</div>
				</div>
				<button type="submit" className="btn btn-primary" onClick={this.handleEditProfile}>Submit Changes</button>
			</div>
		)
	}
}

export default EditProfilePage;
