const baseUrl = 'http://107.191.55.190/session';

export const loadSessionUsername = () => {
	return fetch(baseUrl)
		.then(res => res.json())
}
