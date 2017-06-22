import { Switch, Route } from 'react-router-dom';

export const Profile = () => (
	<div>
		<h2>Profile view </h2>
		<Switch>
			<Route exact path = '/' component = { MyProfile }/>
			<Route path = '/c/:num' component = { ProfileView }/>
		</Switch>
	</div>
)
