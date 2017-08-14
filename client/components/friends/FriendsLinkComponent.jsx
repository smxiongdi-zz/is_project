import React from 'react';
import PropTypes from 'prop-types';
import { deleteMyFriend, fetchMyFriends } from '../.././redux/actions/credActions';
import { Link } from 'react-router-dom';

class FriendsLinkComponent extends React.Component {
	
	constructor() {
		super();

		this.handleDeleteFriend = this.handleDeleteFriend.bind(this);
	}

	handleDeleteFriend() {
		this.props.dispatch(deleteMyFriend({user_id_one: this.props.messLinkObj._id, user_id_two: this.props.profile._id}));
		this.props.dispatch(fetchMyFriends());
	}

	render () {
		let myComponent;
		if(this.props.messLinkObj && this.props.profile) { 
			myComponent = 
			<li className = "list-group-item top-level-message"> 
			<div className = "container">
			<div className = "row">
			<div className = "col-4">
			{this.props.messLinkObj.name}  
			</div>
			<div className = "col">
			<Link to ={'/messages/' + this.props.messLinkObj._id}>
			<button type="button" className="btn btn-outline-primary btn-sm">Message</button> 
			</Link>
			</div>
			<div className = "col">
			<Link to ={'/p/' + this.props.messLinkObj._id}>
			<button type="button" className="btn btn-outline-secondary btn-sm">View Profile</button> 
			</Link>
			</div>
			<div className = "col">
			<button type="button" className="btn btn-outline-danger btn-sm" onClick={this.handleDeleteFriend}>Delete friend</button> 
			</div>
			</div>
			</div>
			</li>
		}
		return (
			<div className="FriendsLinkComponent">
					{myComponent}
			</div>
		)
	}
}


// PRESENTATIONAL COMPONENT

export default FriendsLinkComponent;
