// POST API endpoint for the logout service
const baseUrl = '/api/logout';

export const logoutUser = () => {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include',
	}).then(res => res.json());
}
