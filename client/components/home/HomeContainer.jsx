import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCredentials, loginUser, registerUser} from '../.././redux/actions/credActions';
import LandingPage from './LP.jsx';

const mapStateToProps = state => {
	return ({ 
		username: state.username,
		title: 'Home page',
		lpmessage: 'Welcome to exlang.io',
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		loadUser: () => dispatch(fetchCredentials()),
		loginUser: () => dispatch(loginUser({email: 'zach.noble.smith@gmail.com', pass: 'test'})),
	})
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(LandingPage);
export default HomeContainer;
