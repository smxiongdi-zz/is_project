const baseUrl = '/api/user_profile';

export const loadUserProfile = (user_id) => {
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
