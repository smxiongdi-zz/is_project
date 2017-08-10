import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { fetchUserDetails, sendMyNotification, isRequested, setAlreadyRequested } from '../.././redux/actions/credActions';

class MessageChainPage extends React.Component {

	constructor() {
		super()
	}

	componentDidMount() {
		console.log("PROPS : " + this.props.match.params.user_id);
		this.props.dispatch(fetchUserDetails({user_id: this.props.match.params.user_id}));
		this.props.dispatch(isRequested({id_one: this.props.profile._id, id_two: this.props.match.params.user_id}));
		this.props.fetchMyFriends();
	}

	render() {
		let isFriend = false;

		if(this.props.friendObj) {
			this.props.friendObj.map((x) => {
				if(x.user_id_one == this.props.match.params.user_id) {
					isFriend = true;
				}
				else if(x.user_id_two == this.props.match.params.user_id) {
					isFriend = true;
				}
			});
		}

		return (
			<div>
				<h4>Message chain page</h4>
				{ !isFriend ? "Sorry, we don't know how you got here. Try <a href='/'>returning home</a>" : '' }
			</div>
		)
	}
}

export default MessageChainPage;
