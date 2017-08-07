import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { fetchUserDetails } from '../.././redux/actions/credActions';

class UserProfilePage extends React.Component {

	componentDidMount() {
		console.log("PROPS : " + this.props.match.params.user_id);
		this.props.dispatch(fetchUserDetails({user_id: this.props.match.params.user_id}));
	}

	render() {
		return (
			<div>
				<h2>{ this.props.title ? this.props.title : '' }</h2>
				<h3>{this.props.match.params.user_id}</h3>
				<h3>{this.props.selectedUser ? this.props.selectedUser.name : 'No such user' }</h3>
				<h4>Speaks: {this.props.selectedUser ? this.props.selectedUser.lang_native : ''}</h4>
				<h4>Learning: {this.props.selectedUser ? this.props.selectedUser.lang_learning : ''}</h4>
{/*				<h4>Speaks: {this.state.profile.lang_native.map((x) => {x + ' '})}</h4>
				<h4>Learning: {this.state.profile.lang_learning.map((x) => {x + ' '})}</h4>
*/}
				<h4>Location: {this.props.selectedUser ? this.props.selectedUser.loc : ''}</h4>
				<h4>Gender: {this.props.selectedUser ? this.props.selectedUser.sex : ''}</h4>
			</div>
		)
	}
}

export default UserProfilePage;
