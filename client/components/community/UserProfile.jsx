import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { loadUserProfile } from '../.././lib/community/grabUserProfile.jsx';

class UserProfile extends React.Component {

	constructor() {
		super()
		this.state = {
			profile: {
				lang_learning: [],
				lang_native: []
			} 
		}
	}

	componentDidMount() {
		loadUserProfile({user_id: this.props.match.params.user_id})
			.then((profile) => this.setState({profile: profile}))
	}

	render() {
		return (
			<div>
				<h2>User Profile view </h2>
				<h3>{this.props.match.params.user_id}</h3>
				<h3>{this.state.profile.name}</h3>
				<h4>Speaks: {this.state.profile.lang_native}</h4>
				<h4>Learning: {this.state.profile.lang_learning}</h4>
{/*				<h4>Speaks: {this.state.profile.lang_native.map((x) => {x + ' '})}</h4>
				<h4>Learning: {this.state.profile.lang_learning.map((x) => {x + ' '})}</h4>
*/}
				<h4>Location: {this.state.profile.loc}</h4>
				<h4>Gender: {this.state.profile.sex}</h4>
			</div>
		)
	}
}

export default UserProfile;
