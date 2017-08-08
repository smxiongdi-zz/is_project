import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserLinkComponent = (props) => {
	let myComponent;
	if(props.commLinkObj.name && props.commLinkObj.lang_native[0] && props.commLinkObj.lang_learning[0] && props.commLinkObj.sex) {
		if((props.visNative != null && props.visNative != '') && props.visNative != props.commLinkObj.lang_native[0]) {
			myComponent = null
		}
		else if((props.visLearning != null && props.visLearning != '') && props.visLearning != props.commLinkObj.lang_learning[0]) {
			myComponent = null
		}
		else if((props.visGender != null && props.visGender != '') && props.visGender != props.commLinkObj.sex) {
			myComponent = null
		}
		else {
			myComponent = 
			<li className = "list-group-item community-member"> 
			<Link to ={'/p/' + props.commLinkObj._id}>
			{props.commLinkObj.name} <br/> 
			Speaks: {props.commLinkObj.lang_native[0]}<br/> 
			Learning: {props.commLinkObj.lang_learning[0]} <br/> 
			Gender: {props.commLinkObj.sex} </Link>
			</li> 
		}
	}
	else {
		myComponent = null
	}
	return (
		<div className="UserLinkComponent">
				
				{/*
				<Link to ={'/p/' + props.commLinkObj._id}> 
					{props.commLinkObj.name} <br/>
					Speaks: {props.commLinkObj.lang_native[0]}<br/>
					Learning: {props.commLinkObj.lang_learning[0]} <br/>
					Gender: {props.commLinkObj.seprops.commLinkObj} 
				</Link> 
				Garbage text
				*/}
				{myComponent}
		</div>
	)
}


// PRESENTATIONAL COMPONENT

export default UserLinkComponent;
