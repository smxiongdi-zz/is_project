// POST API endpoint for the login service
// expects a username (email) and password
const baseUrl = 'https://www.google.com/recaptcha/siteverify';

export const verifyCaptcha = (captchaInfo) => {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(captchaInfo)
	}).then(res => res.json());
}
