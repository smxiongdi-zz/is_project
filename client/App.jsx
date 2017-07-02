// react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// styles
import styles from './css/app.css';

// components
import Navbar from './components/nav/Navbar.jsx';
import Footer from './components/nav/Footer.jsx';
import Home from './components/home/Home.jsx';
import Community from './components/community/Community.jsx';
import UserProfile from './components/community/UserProfile.jsx';
import Profile from './components/profile/Profile.jsx';
import EditProfile from './components/profile/EditProfile.jsx';
import LoginView from './components/account/LoginView.jsx';
import RegisterView from './components/account/RegisterView.jsx';
import FourZeroFour from './components/misc/404.jsx';
import { loadSessionUsername } from './lib/grabSession.jsx';
import { loadUserProfile } from './lib/profile/grabProfile.jsx';
import { editProfile } from './lib/profile/editProfile.jsx';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			username: '',
			greeting: 'Welcome, would you like to login or register?',
			profile: { 
				name: '',
				lang_native: '',
				lang_learning: '',
				bday: '',
				sex: '',
				pic: '',
				loc: ''
			}
		}
		this.handleEditProfile = this.handleEditProfile.bind(this)

		this.setLoggedOut = this.setLoggedOut.bind(this)
		this.setLoggedIn= this.setLoggedIn.bind(this)

		this.updateProfile = this.updateProfile.bind(this)

    this.handleProfileNameChange = this.handleProfileNameChange.bind(this);
    this.handleLangNativeChange = this.handleLangNativeChange.bind(this);
    this.handleLangLearningChange = this.handleLangLearningChange.bind(this);
    this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
    this.handleSexChange = this.handleSexChange.bind(this);
    this.handlePicChange = this.handlePicChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
	}

	componentDidMount() {
		loadSessionUsername()
			.then(userObj => this.setState({username: userObj.user}))
		loadUserProfile()
			.then(userProf => this.updateProfile(userProf[0]))
	}

	handleEditProfile() {
		editProfile(this.state.profile)
	}

	setLoggedOut() {
		this.setState({username: ''})
	}

	setLoggedIn(u) {
		this.setState({username: u})
	}

	updateProfile (profObj) {
		this.setState({profile: profObj})
	}

	handleProfileNameChange (evt) {
		var tempProfile = this.state.profile
		tempProfile.name = evt.target.value
		this.updateProfile(tempProfile)
	}

	handleLangNativeChange (evt) {
		var tempProfile = this.state.profile
		tempProfile.lang_native = evt.target.value
		this.updateProfile(tempProfile)
	}

	handleLangLearningChange (evt) {
		var tempProfile = this.state.profile
		tempProfile.lang_learning = evt.target.value
		this.updateProfile(tempProfile)
	}

	handleBirthdayChange (evt) {
		var tempProfile = this.state.profile
		tempProfile.bday = evt.target.value
		this.updateProfile(tempProfile)
	}

	handleSexChange (evt) {
		var tempProfile = this.state.profile
		tempProfile.sex = evt.target.value
		this.updateProfile(tempProfile)
		this.setState({profile: tempProfile})
	}

	handlePicChange (evt) {
		var tempProfile = this.state.profile
		tempProfile.pic = evt.target.value
		this.updateProfile(tempProfile)
	}

	handleLocationChange (evt) {
		var tempProfile = this.state.profile
		tempProfile.loc = evt.target.value
		this.updateProfile(tempProfile)
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
							{/*<Route exact path = '/p' component = { Profile } /> 
							<Route exact path = '/p/edit' component = { EditProfile }/>  */}
							<Route exact path = '/p' render={(props) => (<Profile username={this.state.username} profile={this.state.profile} />)} />
							<Route exact path = '/p/edit' render={(props) => (<EditProfile username={this.state.username} profile={this.state.profile} handleProfileNameChange={this.handleProfileNameChange} handleLangNativeChange={this.handleLangNativeChange} handleLangLearningChange={this.handleLangLearningChange} handleBirthdayChange={this.handleBirthdayChange} handleSexChange={this.handleSexChange} handlePicChange={this.handlePicChange} handleLocationChange={this.handleLocationChange} handleEditProfile={this.handleEditProfile} />)} />
							<Route path = '/p/:user_id' component = { UserProfile } />
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
