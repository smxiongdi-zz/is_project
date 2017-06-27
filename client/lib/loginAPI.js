// POST API endpoint for the login service
// expects a username (email) and password
const baseUrl = '/api/login';

export const loginUser = (userInfo) => {
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
