import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class ProfilePage extends React.Component {

	componentDidMount() {
		!this.props.username ? window.location.href='/login' : console.log('profile loaded')
		this.props.fetchMyDetails();
	}

	render() {
		return (
			<div>
				<h2>{ this.props.title ? this.props.title : '' }</h2>
				<Link to='/p/edit'>Edit profile</Link>
				{ /* <Route path = '/view/:num' component = { ProfileView }/> */ }
				<div className='profile_name'>Name: { this.props.profile ? this.props.profile.name : '' }</div>
				<div className='lang_native'>Speaks: { this.props.profile ? this.props.profile.lang_native.map((x) => {x + ' '}) : '' }</div>
				<div className='lang_learning'>Learning: { this.props.profile ? this.props.profile.lang_learning.map((x) => {x + ' '}) : '' }</div>
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
