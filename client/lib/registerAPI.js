const baseUrl = '/register/post';

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
