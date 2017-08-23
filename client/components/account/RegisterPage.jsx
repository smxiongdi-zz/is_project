import React from 'react';
import Recaptcha from 'react-gcaptcha';

import { registerUser } from '../.././redux/actions/credActions';

class RegisterPage extends React.Component {

  constructor() {
    super();
    this.state = {
      inputEmail: '',
      inputPass: '',
			message: '',
			captcha: false,
    }

		// bind 'this'
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showTempMessage = this.showTempMessage.bind(this);
		this.handleRecaptcha = this.handleRecaptcha.bind(this);
  }

  handleEmailChange (evt) {
    this.setState({inputEmail: evt.target.value});
  }
  handlePassChange (evt) {
    this.setState({inputPass: evt.target.value});
  }
	handleRecaptcha (key) {
		this.setState({captcha: true})
	}

	handleSubmit (evt) {
		evt.preventDefault()
		if(this.state.inputEmail && this.state.inputPass.length >= 4) {
			const newUser = {email: this.state.inputEmail, pass: this.state.inputPass}
			this.state.captcha ? this.props.dispatch(registerUser(newUser)) : ''
			this.setState({captcha: false})
		} else if(!this.state.inputEmail) {
			this.setState({message: 'Please enter e-mail'})
		} else { this.setState({message: 'Password too short'}) }
	}

	showTempMessage (msg) {
		setTimeout(() => this.props.history.push('/'), 1000)
	}

	render () {
		this.props.username ? this.showTempMessage() : ''
		return (

			<div>
				<h2>{this.props.title}</h2>
				<form>
					<div className="form-group inpfield">
						<label htmlFor="inpEmail">Email address</label>
						<input type="email" className="form-control" id="inpEmail" placeholder="Email" onChange={this.handleEmailChange} value={this.state.inputEmail}/>
						<small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
					</div>
					<div className="form-group inpfield">
						<label htmlFor="inpPass">Password</label>
						<input type="password" className="form-control" id="inpPass" placeholder="Password" onChange={this.handlePassChange} value={this.state.inputPass}/>
					</div>
					<Recaptcha
						sitekey='6Lf2CykUAAAAAB_oB_wPueIqrIjZq8sdb5ml4ox9'
//            sitekey='6LeJsCwUAAAAAOWaqwG1PDGw6pU5FpYc-YKLOJsF'
						verifyCallback={this.handleRecaptcha}
						theme="dark"
					/>

					<button className="btn btnfield" onClick={this.handleSubmit}>Send</button>
				</form>
				{ this.state.message }

			</div>
		)
	}
}

export default RegisterPage;
