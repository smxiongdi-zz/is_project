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
import FourZeroFour from './components/404.jsx';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className = "App">
					<Navbar />
					<Footer />
					<Switch>
						<Route exact path = '/' component = { Footer } />
						<Route exact path = '/c' component = { Community } />
						<Route exact path = '/p' component = { Profile } />
						<Route component = { FourZeroFour } />
					</Switch>
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
