// react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// styles
import styles from './css/app.css';

// components
import NavbarContainer from './components/nav/NavbarContainer.jsx';
import Footer from './components/nav/Footer.jsx';
import HomeContainer from './components/home/HomeContainer.jsx';
import LoginContainer from './components/account/LoginContainer.jsx';
import LogoutContainer from './components/account/LogoutContainer.jsx';
import RegisterContainer from './components/account/RegisterContainer.jsx';
import CommunityContainer from './components/community/CommunityContainer.jsx';
import ProfileContainer from './components/profile/ProfileContainer.jsx';
import UserProfileContainer from './components/community/UserProfileContainer.jsx';
import EditProfileContainer from './components/profile/EditProfileContainer.jsx';
// import FourZeroFour from './components/misc/404.jsx';

//actions

class App extends React.Component {

	render() {
		return (
			<div className = "App">
				<Router>
					<div className = "app_content">
						<NavbarContainer />
						<Footer />
						<div className = "main_content">
							<Switch>
								<Route exact path ="/" component = { HomeContainer } />
								<Route exact path ="/login" component = { LoginContainer } />
								<Route exact path ="/logout" component = { LogoutContainer } />
								<Route exact path ="/register" component = { RegisterContainer } />
								<Route exact path ="/c" component = { CommunityContainer } />
								<Route exact path ="/p" component = { ProfileContainer } />
								<Route exact path ="/p/edit" component = { EditProfileContainer } />
								<Route path ="/p/:user_id" component = { UserProfileContainer } />
							</Switch>
						</div>
					</div>
        </Router>
			</div>
		);
	};

}

export default App;
