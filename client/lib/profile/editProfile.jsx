const baseUrl = '/api/profile_edit';

export const editProfile = (profile_obj) => {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(profile_obj)
	}).then(res => res.json())
}
