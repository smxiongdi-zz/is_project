import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../.././redux/actions/credActions';
import Navbar from './Navbar.jsx';

// container component for nav

const mapStateToProps = state => {
	return ({
		username: state.username,
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		logoutUser: () => dispatch(logoutUser()),
	})
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default NavbarContainer;
