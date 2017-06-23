// react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// styles
import styles from './css/app.css';

// components
import MyHeader from './components/MyHeader.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
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
	}

	componentDidMount() {
		loadSessionUsername()
			.then(userObj => this.setState({username: userObj.user}), console.log(this.state.username))
	}

	render() {
		return (
			<Router>
				<div className = "App">
					<Navbar username={this.state.username}/>
					<Footer />
					<div className = 'main_content'>
						{this.state.username ? 'Hello ' + this.state.username : this.state.greeting}
						<Switch>
							<Route exact path = '/' component = { Community } />
							<Route exact path = '/c' component = { Community } />
							<Route exact path = '/p' component = { Profile } />
							<Route exact path = '/login' component = { LoginView } />
							<Route exact path = '/register' component = { RegisterView } />
							<Route component = { FourZeroFour } />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));