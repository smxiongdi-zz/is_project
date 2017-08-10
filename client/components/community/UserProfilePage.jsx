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
		let userSpeaks = '';
		let userLearning = '';
		

		if(this.props.selectedUser) {
			this.props.selectedUser.lang_native.map((x) => {
				userSpeaks += x + ' ';	
			})

			this.props.selectedUser.lang_learning.map((x) => {
				userLearning += x + ' ';	
			})
		}


		let alreadyRequested = <button type="button" className="btn btn-outline-secondary btn-sm" disabled>Friendship request pending</button>;
		let addFriend = <button type="button" className="btn btn-outline-success btn-sm" onClick={this.sendFriendRequest}>+add friend</button>; 
		let sendMessage = <Link to = {'/messages/' + this.props.match.params.user_id}><button type="button" className="btn btn-outline-primary btn-sm">send message</button></Link>; 

		if(this.props.myFriendsProfilesObj && this.props.selectedUser) {
			this.props.myFriendsProfilesObj.map((x) => {
				if(x._id == this.props.selectedUser._id) {
					isFriend = true;
				}
			});
		}

		let profileActionButton;
		if(isFriend) { profileActionButton = sendMessage }
		else if(this.props.alreadyRequested) { profileActionButton = alreadyRequested }
		else { profileActionButton = addFriend }

		return (
			<div>
				<h4>
				<div className="row">
				<div className="col-4">
				{ this.props.title ? this.props.title : '' }
				</div>
				<div className="col-2">
				{ this.props.username ? profileActionButton : ''}
				</div>
				</div>
				</h4>
				<h3>{this.props.match.params.user_id}</h3>
				<h3>{this.props.selectedUser ? this.props.selectedUser.name : 'No such user' }</h3>
				<h4>Speaks: {userSpeaks}</h4>
				<h4>Learning: {userLearning}</h4>
{/*				<h4>Speaks: {this.state.profile.lang_native.map((x) => {x + ' '})}</h4>
				<h4>Learning: {this.state.profile.lang_learning.map((x) => {x + ' '})}</h4>
*/}
				<h4>Location: {this.props.selectedUser ? this.props.selectedUser.loc : ''}</h4>
				<h4>Gender: {this.props.selectedUser ? this.props.selectedUser.sex : ''}</h4>
				<h4>About:<br /> {this.props.selectedUser ? this.props.selectedUser.about_me: ''}</h4>
			</div>
		)
	}
}

export default UserProfilePage;
