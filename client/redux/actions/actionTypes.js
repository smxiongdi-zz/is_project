// action constants

const SET_PROF = 'SET_PROF'
const SET_AUTH = 'SET_AUTH'
const SET_ERROR = 'SET_ERROR'
const SENDING_REQUEST = 'SENDING_REQUEST'

// import library APIs here
import { /* lib apis for login/logout/register */ } from '../.././lib/*'


export function setProf(profile) {
	return { type: SET_PROF, profile }
}

export function setAuth(username) {
	return { type: SET_AUTH, username}
}

export function setError(msg) {
	return { type: SET_ERROR, msg}
}

export function sendingRequest(req) {
	return { type: SENDING_REQUEST, req}
}


export function loginUser(uname, passwd) {
	return (dispatch) => {
		dispatch(sendingRequest(true)
		loginUserAPI(uname, passwd).then((x) => { dispatch(sendingRequest(false)), dispatch(setAuth(x.uname)) })
	}
}

export function registerUser(uname, passwd) {
	return (dispatch) => {
		dispatch(sendingRequest(true)
		registerUserAPI(uname, passwd).then((x) => { dispatch(sendingRequest(false)), dispatch(setAuth(x.uname)) })
	}
}

export function logout() {
	return (dispatch) => {
		dispatch(sendingRequest(true)
		logoutUserAPI.then((x) => { dispatch(sendingRequest(false)), dispatch(setAuth('')) })
	}
}

export function update(uname, passwd) {
	return (dispatch) => {
		dispatch(sendingRequest(true)
		updateProfileAPI.then((x) => { dispatch(sendingRequest(false)), dispatch(setAuth(x.uname)) })
	}
}
