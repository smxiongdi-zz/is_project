import React from 'react';
import { NavLink } from 'react-router-dom';

export const LRElements = () => {
	return (
		<div>
			<li><NavLink to = {{pathname: '/register'}}><span className="glyphicon glyphicon-user"></span>Register</NavLink></li><li><NavLink to ={{pathname: '/login'}}><span className="glyphicon glyphicon-log-in"></span>Login</NavLink></li>
		</div>
	)
}
