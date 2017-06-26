// react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// styles
import styles from './css/app.css';

// components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/home/Home.jsx';
import Community from './components/community/Community.jsx';
import Profile from './components/profile/Profile.jsx';
import LoginView from './components/account/LoginView.jsx';
import RegisterView from './components/account/RegisterView.jsx';
import FourZeroFour from './components/404.jsx';
import { loadSessionUsername } from './lib/grabSession.jsx';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			username: '',
			greeting: 'Welcome, would you like to login or register?'
		}
		this.setLoggedOut = this.setLoggedOut.bind(this)
		this.setLoggedIn= this.setLoggedIn.bind(this)
	}

	componentDidMount() {
		loadSessionUsername()
			.then(userObj => this.setState({username: userObj.user}))
	}

	setLoggedOut() {
		this.setState({username: ''})
	}

	setLoggedIn(u) {
		this.setState({username: u})
	}
		
	render() {
		return (
			<Router>
				<div className = "App">
					<Navbar username={this.state.username} setLoggedOut={this.setLoggedOut} />
					<Footer />
					<div className = 'main_content'>
						{this.state.username ? 'Hello ' + this.state.username : this.state.greeting}
						<Switch>
							<Route exact path = '/' component = { Home } />
							<Route exact path = '/c' component = { Community } />
							<Route exact path = '/p' component = { Profile } />
							<Route exact path = '/login' component = { this.state.username ? Profile : LoginView } />
							{/* <Route exact path = '/login' render = {(props) => (<LoginView setLoggedIn={this.setLoggedIn} username={this.state.username} {...props} />)} /> */}
							<Route exact path = '/register' component = { this.state.username ? Profile : RegisterView } />
							<Route component = { FourZeroFour } />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
