import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class ProfilePage extends React.Component {

	componentDidMount() {
//		!this.props.username ? window.location.href='/login' : console.log('profile loaded')
		this.props.fetchMyDetails();
	}

	render() {

	let EditProfile =
	<div className="col-2">
	<Link to='/p/edit'><button type="button" className="btn btn-outline-primary btn-sm">Edit profile</button></Link>
	</div>
	let ViewNotifications =
	<div className="col-4">
	<Link to='/notifications'><button type="button" className="btn btn-outline-primary btn-sm">View notifications</button></Link>
	</div>
	let ViewFriends =
	<div className="col-2">
	<Link to='/friends'><button type="button" className="btn btn-outline-primary btn-sm">View friends</button></Link>
	</div>
	let Name =
	<div className='profile_name'>Name: { this.props.profile ? this.props.profile.name : '' }</div>
	let NativeLang = "Native language(s): ";
	let LearningLang = "Learning language(s): ";
	if(this.props.profile) {
		if(this.props.profile.lang_native[0]) {
			NativeLang+=this.props.profile.lang_native[0] + ' '
		}
		if(this.props.profile.lang_native[1]) {
			NativeLang+=this.props.profile.lang_native[1] + ' '
		}
		if(this.props.profile.lang_native[2]) {
			NativeLang+=this.props.profile.lang_native[2]
		}

		if(this.props.profile.lang_learning[0]) {
			LearningLang+=this.props.profile.lang_learning[0] + ' '
		}
		if(this.props.profile.lang_learning[1]) {
			LearningLang+=this.props.profile.lang_learning[1] + ' '
		}
		if(this.props.profile.lang_learning[2]) {
			LearningLang+=this.props.profile.lang_learning[2]
		}
	}
			
		


		return (
			<div>
				<h2>{ this.props.title ? this.props.title : '' }</h2>
				<div className ="row">
					{EditProfile}
					{ViewNotifications}
					{ViewFriends}
				</div>
				{ /* <Route path = '/view/:num' component = { ProfileView }/> */ }
				{Name}
				<div className = "native"> {NativeLang} </div>
				<div className = "learning"> {LearningLang} </div>
				<div className='bday'>Birthday: { this.props.profile ? this.props.profile.bday : '' }</div>
				<div className='loc'>Location: { this.props.profile ? this.props.profile.loc : '' }</div>
				<div className='sex'>Gender: { this.props.profile ? this.props.profile.sex : '' }</div>
				<div className='pic'>Pic path:{ this.props.profile ? this.props.profile.pic : '' }</div>
				{ /*
				<div class = 'native_language' value = {this.props.profile.lang_native}></div>
				<div class = 'learning_language' value = {this.props.profile.lang_learning}></div>
				<div class = 'learning_language' value = {this.props.profile.lang_learning}></div>
				*/ }
			</div>
		)
	}
}

export default ProfilePage;
