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
		let ViewFriends = <Link to='/friends'>friends</Link>
		let ViewNotifications = <Link to='/notifications'>notifications</Link>
		let ViewProfile= <Link to='/p'>profile</Link>

		let myName = '';
		if(this.props.profile) {
			myName = <h1 className="display-4">{this.props.profile.name}</h1>
		} else { myName = '' }

		return (
			<div className = "container">
				{myName}
				<div className = 'col-1'>
					<ul className = 'nav flex-column'>
						<li className = 'nav-item'> { ViewProfile } </li>
						<li className = 'nav-item'> { ViewFriends } </li>
						<li className = 'nav-item'> { ViewNotifications } </li>
					</ul>
				</div>

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
