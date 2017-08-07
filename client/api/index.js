// POST API endpoint for the fetch username service
// relies on user cookies for retrieval

export const fetchUsername = () => {
	const baseUrl = '/api/session';
	return fetch(baseUrl, {
			method: "GET",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Cache': 'no-cache'
			},
			credentials: 'include'
		})
		.then(res => res.json())
}

// POST API endpoint for the login service
// expects a username (email) and password

export const loginAPI = (userInfo) => {
	const baseUrl = '/api/login';
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(userInfo)
	}).then(res => res.json());
}

// POST API endpoint for the register service
// expects a username (email) and password

export const registerAPI = (newUser) => {
	const baseUrl = '/api/register';
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newUser)
	}).then(res => res.json())
}

// POST API endpoint for the logout service
export const logoutAPI = () => {
	const baseUrl = '/api/logout';
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include',
	}).then(res => res.json());
}

export const fetchCommunity = () => {
	const baseUrl = '/api/community_load';
	return fetch(baseUrl, {
			method: "GET",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Cache': 'no-cache'
			},
			credentials: 'include'
		})
		.then(res => res.json())
}

export const fetchUserProfile = (user_id) => {
	const baseUrl = '/api/user_profile';
	console.log("API LOG: " + user_id);
	return fetch(baseUrl, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Cache': 'no-cache'
			},
			credentials: 'include',
			body: JSON.stringify(user_id)
		})
		.then(res => res.json())
}

export const fetchMyProfile = () => {
	const baseUrl = '/api/profile_load';
	return fetch(baseUrl, {
			method: "GET",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Cache': 'no-cache'
			},
			credentials: 'include'
		})
		.then(res => res.json())
}

export const editProfile = (profile_obj) => {
	const baseUrl = '/api/profile_edit';
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(profile_obj)
	}).then(res => res.json())
}
