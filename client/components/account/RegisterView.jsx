import React from 'react';

import { registerUser } from '../.././lib/registerAPI.js';

class RegisterView extends React.Component {

  constructor() {
    super();
    this.state = {
      registerEmail: '',
      registerPass: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showTempMessage = this.showTempMessage.bind(this);
  }

  handleEmailChange (evt) {
    this.setState({registerEmail: evt.target.value});
  }
  handlePassChange (evt) {
    this.setState({registerPass: evt.target.value});
  }

	handleSubmit (evt) {
		evt.preventDefault()
		const newUser = {email: this.state.registerEmail, pass: this.state.registerPass}
		registerUser(newUser)
			.then(() => this.showTempMessage('Registered - please confirm registration. Check your email'))
	}

	showTempMessage (msg) {
		this.setState({message: msg})
		setTimeout(() => this.setState({message}: ''), 5000)
	}

	render () {
		return (
			<div>
				<h2>Register view </h2>
				<form>
					<div className="form-group inpfield">
						<label for="regEmail">Email address</label>
						<input type="email" className="form-control" id="regEmail" placeholder="Email" onChange={this.handleEmailChange} value={this.state.registerEmail}/>
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group inpfield">
						<label for="regPass">Password</label>
						<input type="password" className="form-control" id="regPass" placeholder="Password" onChange={this.handlePassChange} value={this.state.registerPass}/>
					</div>
					<button className="btn btnfield" onClick={this.handleSubmit}>Send</button>
				</form>
				{this.state.message}
			</div>
		)
	}
}

RegisterView.propTypes = {
  registerEmail: React.PropTypes.string.isRequired,
  registerPass: React.PropTypes.string.isRequired,
  handlePassChange: React.PropTypes.func,
  handleEmailChange: React.PropTypes.func
}


export default RegisterView;
