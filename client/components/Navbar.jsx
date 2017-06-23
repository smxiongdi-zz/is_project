import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
	render () {
		return (
			<div>
					<nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<a className="navbar-brand" href="#">exlang</a>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<div className="nav-link" href="#"><NavLink exact activeClassName="active" to = '/'>Home</NavLink><span className="sr-only">(current)</span></div>
							</li>
							<li className="nav-item">
								<div className="nav-link" href="#"><NavLink exact activeClassName="active" to = {{pathname: '/c'}} >Community</NavLink></div>
							</li>
							<li className="nav-item">
								<div className="nav-link" href="#"><NavLink exact activeClassName="active" to = {{pathname: '/p'}} >Profile</NavLink></div>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}

export default Navbar;
