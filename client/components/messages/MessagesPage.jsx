import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MessageLinkContainer from './MessageLinkContainer.jsx';
//import MessageSearchContainer from './MessageSearchContainer.jsx';

class MessagesPage extends React.Component {

	constructor() {
		super();
		this.state = {
		}
	}

	componentDidMount() {
//		this.props.fetchMyFriendsProfiles();
	}

	render() {
		//<MessageSearchContainer title={this.props.title}/>

		return (
			<div>
			<h4>{this.props.title}</h4>
			<p>Click on a friend to start messaging</p>
				<ul className="list-group">
				{ this.props.myFriendsProfilesObj ? this.props.myFriendsProfilesObj.map((x) => <MessageLinkContainer messLinkObj = {x} /> ) : '' }
				</ul>
			</div>
		)
	}
}


// PRESENTATIONAL COMPONENT

export default MessagesPage;
