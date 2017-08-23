import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCredentials, loginUser, registerUser, testInsertPerformance } from '../.././redux/actions/credActions';
import LandingPage from './LP.jsx';

const mapStateToProps = state => {
	return ({ 
		username: state.username,
		profile: state.profile,
		title: 'exlang.io dashboard',
	})
}

const mapDispatchToProps = dispatch => {
	return ({
	})
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(LandingPage);
export default HomeContainer;
