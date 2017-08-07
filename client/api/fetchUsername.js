const baseUrl = '/api/session';

export const fetchUsername = () => {
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
