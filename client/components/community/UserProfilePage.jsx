import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { fetchUserDetails, sendMyNotification, isRequested, setAlreadyRequested } from '../.././redux/actions/credActions';

class UserProfilePage extends React.Component {

	constructor() {
		super()
		this.sendFriendRequest = this.sendFriendRequest.bind(this)
	}

	componentDidMount() {
		console.log("PROPS : " + this.props.match.params.user_id);
		this.props.dispatch(fetchUserDetails({user_id: this.props.match.params.user_id}));
		this.props.dispatch(isRequested({id_one: this.props.profile._id, id_two: this.props.match.params.user_id}));
		this.props.fetchMyFriends();
	}

	sendFriendRequest() {
		this.props.dispatch(sendMyNotification({title: 'Friend request', message: 'Hello, I would like to add you as a friend', sendTo: this.props.selectedUser._id, isFriendRequest: true, from_name: this.props.profile.name, from_id: this.props.profile._id }))
		this.props.dispatch(setAlreadyRequested())
	}

	render() {
		let isFriend = false;
		let alreadyRequested = <button type="button" className="btn btn-secondary" disabled>Friendship request pending</button>;
		let addFriend = <button type="button" className="btn btn-success" onClick={this.sendFriendRequest}>+add friend</button>; 
		let sendMessage = <button type="button" className="btn btn-primary">send message</button>; 
		if(this.props.friendObj) {
			this.props.friendObj.map((x) => {
				if(x.user_id_one == this.props.selectedUser._id) {
					isFriend = true;
				}
				else if(x.user_id_two == this.props.selectedUser._id) {
					isFriend = true;
				}
			});
		}

		return (
			<div>
				<h4>{ this.props.title ? this.props.title : '' }
				{ this.props.isFriend ? sendMessage : this.props.alreadyRequested ? alreadyRequested : addFriend }</h4>
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
