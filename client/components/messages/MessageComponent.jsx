import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MessageComponent = (props) => {

	let myComponent;

	if(props.message && props.selectedUser) { 
		let sentDate = new Date(props.message.sent_time);
		myComponent = 
		<li className = "list-group-item top-level-message"> 
		<div className = "row">
		<div className = "col-12">
		{props.selectedUser.name} said on {sentDate.toDateString()}:
		</div>
		</div><br />
		<div className = "row">
		<div className = "col-10">
		{props.message.msg_content}
		</div>
		</div>
		</li>
	}
	return (
		<div className="MessageComponent">
				{myComponent}
		</div>
	)
}


// PRESENTATIONAL COMPONENT

export default MessageComponent;
