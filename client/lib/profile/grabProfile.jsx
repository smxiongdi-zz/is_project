const baseUrl = '/api/profile_load';

export const loadUserProfile = () => {
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
