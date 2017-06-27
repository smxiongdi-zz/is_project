import React from 'react';
import { Redirect } from 'react-router-dom';

import { loginUser } from '../.././lib/loginAPI.js';

class LoginView extends React.Component {

	constructor() {
		super();
		this.state = {
			loginEmail: '',
			loginPass: '',
			redirectTo: null
		}
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showTempMessage = this.showTempMessage.bind(this);
	}

	componentDidMount() {
		console.log('mounting login')
	}

	handleEmailChange (evt) {
		this.setState({loginEmail: evt.target.value});
	}
	handlePassChange (evt) {
		this.setState({loginPass: evt.target.value});
	}

  handleSubmit (evt) {
//    evt.preventDefault()
    const userInfo = {email: this.state.loginEmail, pass: this.state.loginPass}
    loginUser(userInfo)
      .then(() => this.showTempMessage('Logging in'), this.setState({ redirectTo: '/' }), window.location.reload())
      /* .then(() => this.showTempMessage('Logging in'), this.props.setLoggedIn(userInfo.email), this.setState({ redirectTo: '/' })) */
  }

  showTempMessage (msg) {
    this.setState({message: msg})
    setTimeout(() => this.setState({message}: ''), 5000)
  }

	render () {
		return (
			<div>
				<h2>Login view </h2>
				<form>
					<div className="form-group inpfield">
						<label for="logEmail">Email address</label>
						<input type="email" className="form-control" id="logEmail" placeholder="Email" onChange={this.handleEmailChange} value={this.state.loginEmail}/>
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group inpfield">
						<label for="logPass">Password</label>
						<input type="password" className="form-control" id="logPass" placeholder="Password" onChange={this.handlePassChange} value={this.state.loginPass}/>
					</div>
					{ this.state.redirectTo ?
						<Redirect to ={{ pathname: this.state.redirectTo }} /> :
							(
								<button className="btn btnfield" onClick={this.handleSubmit}>Send</button>
							)
					}
				</form>
				{this.state.message}
			</div>
		)
	}
}

LoginView.propTypes = {
	loginEmail: React.PropTypes.string.isRequired,
	loginPass: React.PropTypes.string.isRequired,
	handlePassChange: React.PropTypes.func,
	handleEmailChange: React.PropTypes.func
}

export default LoginView
