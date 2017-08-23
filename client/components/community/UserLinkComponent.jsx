import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserLinkComponent = (props) => {
	let userNative = '';
	let userLearning = '';

	let activeNative = false;
	let activeLearning = false;
	props.commLinkObj.lang_native.map((x) => {
		userNative += x + ' ';
		if(x == props.visNative) { activeNative = true; }
	})
	props.commLinkObj.lang_learning.map((x) => {
		userLearning += x + ' ';
		if(x == props.visLearning) { activeLearning= true; }
	})

	let myComponent;
	if(props.commLinkObj.name && props.commLinkObj.lang_native[0] && props.commLinkObj.lang_learning[0] && props.commLinkObj.sex && props.profile) {
		if((props.visNative != null && props.visNative != '') && (activeNative == false)) {
			myComponent = null
		}
		else if((props.visLearning != null && props.visLearning != '') && (activeLearning == false)) {
			myComponent = null
		}
		else if((props.visGender != null && props.visGender != '') && props.visGender != props.commLinkObj.sex) {
			myComponent = null
		}
		else if(props.profile._id == props.commLinkObj._id) { myComponent = null }
		else {
			myComponent = 
			<li className = "list-group-item community-member"> 
			<div className = 'container commElement'>
			<Link to ={'/p/' + props.commLinkObj._id}>
			{props.commLinkObj.name} </Link>
			<div className = 'row'>
			<div className = 'col-1'> Speaks: </div> <div className = 'col-4'>{userNative} </div>
			</div>
			<div className = 'row'>
			<div className = 'col-1'> Learning: </div> <div className = 'col-4'>{userLearning} </div>
			</div>
			<div className = 'row'>
			<div className = 'col-1'> Gender: </div> <div className = 'col-4'> {props.commLinkObj.sex} </div>
			</div>
			</div>
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
