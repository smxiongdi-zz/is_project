import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Main home / component display
class LandingPage extends React.Component {

	componentDidMount() {
	}

	render() {
		// basic links
		let ViewFriends = <Link to='/friends'><button type="button" className="btn btn-outline-primary btn-sm">View friends</button></Link>
		let ViewNotifications = <Link to='/notifications'><button type="button" className="btn btn-outline-primary btn-sm">View notifications</button></Link>
		let ViewProfile= <Link to='/p'><button type="button" className="btn btn-outline-primary btn-sm">View profile</button></Link>

		return (
			<div className = "container">
				<h1 className="display-4"> { this.props.username ? this.props.title : '' } </h1>
				{ this.props.profile ? 'Hello, ' + this.props.profile.name : 'Welcome to exlang, please log in or register.' }


				// some fodder todos
				<div className="todos">Configure image resizing on express for uploaded pics</div>
				<div className="todos">Add users currently online #, your last login, user stat api</div>
				<div className="todos">Add friend recent activity after blog implemented</div>
				<div className="todos">Friends pane on right side</div>
				<div className="todos">Privacy policy/additional info in footer</div>
				<div className="todos">enable character limit caps on profile inputs</div>
			</div>
		)
	}
}

LandingPage.propTypes = {
	profile: PropTypes.object,
	username: PropTypes.string,
	title: PropTypes.string,	
}

export default LandingPage;
