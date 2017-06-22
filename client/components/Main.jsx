import { Switch, Route } from 'react-router-dom';

const Main = () => (
	<main>
		<Switch>
			<Route exact path = '/' component = { Home }/>
			<Route exact path = '/c' component = { Community }/>
			<Route exact path = '/p' component = { Profile }/>
		</Switch>
	</main>
)
