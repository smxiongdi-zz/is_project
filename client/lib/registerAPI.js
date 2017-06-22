const baseUrl = 'http://107.191.55.190/register/post';

export const registerUser = (newUser) => {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newUser)
	}).then(res => res.json())
}
