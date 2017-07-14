// import actions
import { GRAB_SESS } from '.././actions/actionTypes.js'

// our session's inital profile / uname state
const initialState = {
	// main application state
	username: '',
	greeting: 'Welcome, would you like to login or register?',
	profile_name: '',
	lang_native: [],
	lang_learning: [],
	bday: '',
	sex: '',
	pic: '',
	loc: '',

	// login / register relevant state
	loginEmail: '',
	loginPass: '',


	// for profile editing
	// define in separate constants file for lang_selection, sex, etc
	// then import here and set
}

// reducer
function exlangReducer(state = initialState, action) {
	switch (action.type) {
		case SET_PROF:
			// assign vals properly here
			return Object.assign({}, state, { profile: action.profile })
		case SET_AUTH:
			// assign vals properly here
			return Object.assign({}, state, { username: action.username })
		case SET_ERROR:
			// assign vals properly here
			return Object.assign({}, state, { errorMsg: action.msg })
		default:
			return state
}

export default grabAppSession
