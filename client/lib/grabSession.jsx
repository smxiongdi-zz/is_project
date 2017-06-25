const baseUrl = 'http://107.191.55.190/session';

export const loadSessionUsername = () => {
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
