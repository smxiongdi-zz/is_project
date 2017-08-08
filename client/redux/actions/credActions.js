import { normalize } from 'normalizr';
//import * as schema from './schema';
import { fetchUsername, loginAPI, registerAPI, logoutAPI, fetchCommunity, fetchUserProfile, fetchMyProfile, editProfile, confirmAccount } from '../.././api/index'
import { getIsFetching, getMessage } from '../reducers/exlang';

export const fetchCredentials = () => (dispatch, getState) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true }); 

	return fetchUsername().then(
		response => {
			dispatch({
				type: 'FETCH_USERNAME_SUCCESS',
				isFetching: false,
				username: response.user
			});
		},
		error => {
			dispatch({
				type: 'API_FAILURE',
				isFetching: false,
				message: error.message || 'Failed to acquire username. Try logging in.',
			});
		}
	);
};

export const registerUser = (userObj) => (dispatch) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true }); 

	// rename apis
	registerAPI(userObj).then(
		response => {
			dispatch({
				type: 'REGISTER_USER_SUCCESS',
				message: 'Please verify your account by clicking the link sent to your e-mail'
			});
		},
		error => {
			dispatch({
				type: 'API_FAILURE',
				isFetching: false,
				message: error.message || 'Registration failure. Try a different username or password combination.',
			});
		}
	);
};

export const loginUser = (userObj) => (dispatch) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true }); 

	// rename apis
	loginAPI(userObj).then(
		response => {
			dispatch({
				type: 'LOGIN_USER_SUCCESS',
				isFetching: false,
				username: response.username
			});
		},
		error => {
			dispatch({
				type: 'API_FAILURE',
				isFetching: false,
				message: 'E-mail or password incorrect',
			});
		}
	);
};

export const logoutUser = () => (dispatch) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true }); 

	// rename apis
	logoutAPI().then(
		response => {
			dispatch({
				type: 'LOGOUT_USER_SUCCESS',
				isFetching: false,
				username: null,
				message: 'Thank you for logging out, now returning to the homepage.',
			});
		},
		error => {
			dispatch({
				type: 'API_FAILURE',
				isFetching: false,
				message: 'API Failure - Logout',
			});
		}
	);
};

export const fetchCommunityList = () => (dispatch, getState) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true }); 

	return fetchCommunity().then(
		response => {
			dispatch({
				type: 'FETCH_COMMUNITY_SUCCESS',
				isFetching: false,
				commObj: response
			});
		},
		error => {
			dispatch({
				type: 'API_FAILURE',
				isFetching: false,
				message: error.message || 'API Failure',
			});
		}
	);
};

export const fetchUserDetails = (user_id) => (dispatch, getState) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true }); 

	return fetchUserProfile(user_id).then(
		response => {
			dispatch({
				type: 'FETCH_USER_DETAILS_SUCCESS',
				isFetching: false,
				selectedUser: response
			});
		},
		error => {
			dispatch({
				type: 'API_FAILURE',
				isFetching: false,
				message: error.message || 'API Failure.',
			});
		}
	);
};

export const fetchMyDetails = () => (dispatch, getState) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true }); 

	return fetchMyProfile().then(
		response => {
			dispatch({
				type: 'FETCH_MY_DETAILS_SUCCESS',
				isFetching: false,
				profile: response
			});
		},
		error => {
			dispatch({
				type: 'API_FAILURE',
				isFetching: false,
				message: error.message || 'API Failure.',
			});
		}
	);
};

export const editMyProfile = (edited) => (dispatch, getState) => {
/*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true }); 

	return editProfile(edited).then(
		response => {
			dispatch({
				type: 'UPDATE_PROFILE_SUCCESS',
				isFetching: false,
			});
		},
		error => {
			dispatch({
				type: 'API_FAILURE',
				isFetching: false,
				message: error.message || 'API Failure.',
			});
		}
	);
};

export const confirmMyAccount = (confUrl) => (dispatch, getState) => { /*	if(getIsFetching(getState())) {
		return Promise.resolve();
	}
*/

	dispatch({ type: 'NETWORK_REQUEST', isFetching: true }); 

	return confirmAccount(confUrl).then(
		response => {
			dispatch({
				type: 'CONFIRM_ACCOUNT_SUCCESS',
				isFetching: false,
				message: 'Thank you for confirming your account. Please login - redirecting to login page now.',
			});
		},
		error => {
			dispatch({
				type: 'API_FAILURE',
				isFetching: false,
				message: error.message || 'API Failure - Logout',
			});
		}
	);
};

export const setNativeVisibility = (visNative) => {
	return { type: 'SET_NATIVE_VISIBILITY', visNative }
}

export const setLearningVisibility = (visLearning) => {
	return { type: 'SET_LEARNING_VISIBILITY', visLearning}
}

export const setGenderVisibility = (visGender) => {
	return { type: 'SET_GENDER_VISIBILITY', visGender }
}
