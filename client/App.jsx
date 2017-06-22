// react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import MyHeader from './components/MyHeader.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Community from './components/Community.jsx';
import Profile from './components/Profile.jsx';
import LoginView from './components/account/LoginView.jsx';
import RegisterView from './components/account/RegisterView.jsx';
import FourZeroFour from './components/404.jsx';
import { loadSessionUsername } from './lib/grabSession.jsx';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			username: '',
		}
	}

	componentDidMount() {
		loadSessionUsername()
			.then(userObj => this.setState({username: userObj.user}))
	}

	render() {
		return (
			<Router>
				<div className = "App">
					<Navbar />
					<Footer />
					{this.state.username ? 'Hello ' + this.state.username : 'Login or register'}
					<Switch>
						<Route exact path = '/' component = { Community } />
						<Route exact path = '/c' component = { Community } />
						<Route exact path = '/p' component = { Profile } />
						<Route exact path = '/login' component = { LoginView } />
						<Route exact path = '/register' component = { RegisterView } />
						<Route component = { FourZeroFour } />
					</Switch>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
