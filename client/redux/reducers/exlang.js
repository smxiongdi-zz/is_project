import { combineReducers } from 'redux'

const apiReducer = (state = [], action) => {
	switch(action.type) {
		case 'NETWORK_REQUEST':
			return Object.assign({}, state, {
					isFetching: action.isFetching
			})
		case 'API_FAILURE':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					message: action.message
			})
		case 'FETCH_USERNAME_SUCCESS':
			return Object.assign({}, state, {
					username: action.username,
					isFetching: action.isFetching
			})
		case 'FETCH_COMMUNITY_SUCCESS':
			return Object.assign({}, state, {
					commObj: action.commObj,
					isFetching: action.isFetching
			})
		case 'LOGIN_USER_SUCCESS':
			return Object.assign({}, state, {
					username: action.username,
					isFetching: action.isFetching
			})
		case 'LOGOUT_USER_SUCCESS':
			return Object.assign({}, state, {
					username: action.username,
					isFetching: action.isFetching,
					message: action.message
			})
		case 'REGISTER_USER_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					message: action.message
			})
		case 'FETCH_USER_DETAILS_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					selectedUser: action.selectedUser,
					message: action.message
			})
		case 'FETCH_MY_DETAILS_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					profile: action.profile,
					message: action.message
			})
		case 'UPDATE_PROFILE_SUCCESS':
			return Object.assign({}, state, {
					isFetching: action.isFetching,
					profile: action.profile,
					message: action.message
			})
		default: 
			return state
	}
}

const inputReducer = (state = [], action) => {
	switch(action.type) {
		case 'EMAIL_INPUT':
			return Object.assign({}, state, {
					email_input: action.email_input
			})
		case 'PASSWORD_INPUT':
			return Object.assign({}, state, {
					password_input: action.password_input
			})
	}
}

export default apiReducer /*combineReducers({
	apiReducer,
	inputReducer
})
*/

/*export const getIsFetching = (state) => state.isFetching
export const getMessage = (state) => state.message*/
