import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCredentials, fetchMyDetails, fetchMyFriendsProfiles, fetchMyMessages, fetchMyIP } from './redux/actions/credActions';
import App from './App.jsx';

const mapStateToProps = state => {
	return({
		username: state.username,
		profile: state.profile,
	})
}

const mapDispatchToProps = dispatch => {
	return ({
		dispatch,
		fetchCredentials: () => dispatch(fetchCredentials()),
		fetchMyDetails: () => dispatch(fetchMyDetails()),
		fetchMyFriendsProfiles: () => dispatch(fetchMyFriendsProfiles()),
		fetchMyMessages: () => dispatch(fetchMyMessages()),
		fetchMyIP: () => dispatch(fetchMyIP()),
	})
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
