import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MessageLinkComponent = (props) => {

	let myComponent;
	if(props.messLinkObj) { 
		myComponent = 
		<li className = "list-group-item top-level-message"> 
		<div className = "row">
		<div className = "col-4">
		{props.messLinkObj.name}  
		</div>
		<div className = "col-4">
		<Link to ={'/messages/' + props.messLinkObj._id}>
		<button type="button" className="btn btn-outline-primary btn-sm">Message</button> 
		</Link>
		</div>
		<div className = "col-4">
		<Link to ={'/p/' + props.messLinkObj._id}>
		<button type="button" className="btn btn-outline-secondary btn-sm">View Profile</button> 
		</Link>
		</div>
		</div>
		</li>
	}
	return (
		<div className="MessageLinkComponent">
				{myComponent}
		</div>
	)
}


// PRESENTATIONAL COMPONENT

export default MessageLinkComponent;
