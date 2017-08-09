import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCredentials, loginUser, registerUser} from '../.././redux/actions/credActions';

// dumb component controlled by corresponding container
class LandingPage extends React.Component {

	componentDidMount() {
//		!this.state.username ? this.props.loginUser() : '';
		//!this.props.username ? this.props.loadUser() : '' ;
	}

	render() {
		return (
			<div>
				<h1> { this.props.username ? this.props.title : '' } </h1>
				{ this.props.username }
			</div>
		)
	}
}

export default LandingPage;
