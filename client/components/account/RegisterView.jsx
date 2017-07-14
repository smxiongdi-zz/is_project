import React from 'react';
import Recaptcha from 'react-gcaptcha';

import { registerUser } from '../.././lib/registerAPI.js';
import { verifyCaptcha } from '../.././lib/verifyCaptcha.js';

class RegisterView extends React.Component {

  constructor() {
    super();
    this.state = {
      registerEmail: '',
      registerPass: '',
			captcha: false,
			message: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showTempMessage = this.showTempMessage.bind(this);

		this.handleRecaptcha = this.handleRecaptcha.bind(this);
  }

  handleEmailChange (evt) {
    this.setState({registerEmail: evt.target.value});
  }
  handlePassChange (evt) {
    this.setState({registerPass: evt.target.value});
  }
	handleRecaptcha (key) {
		console.log('mykey ' + key)
		verifyCaptcha(key, '6Lf2CykUAAAAAMv03m_pvF8DL9Wph8fnW14SEwaN')
			.then((x) => console.log(x))
		this.setState({captcha: true})
	}

	handleSubmit (evt) {
		evt.preventDefault()
		const newUser = {email: this.state.registerEmail, pass: this.state.registerPass}
		this.state.captcha ? registerUser(newUser)
			.then(() => this.showTempMessage('Registered - please confirm registration. Check your email')) : ''
		this.setState({captcha: false})
	}

	showTempMessage (msg) {
		this.setState({message: msg})
		setTimeout(() => this.setState({message}: ''), window.location.href = '/', 5000)
	}

	render () {
		return (
			<div>
				<h2>Register view </h2>
				<form>
					<div className="form-group inpfield">
						<label htmlFor="regEmail">Email address</label>
						<input type="email" className="form-control" id="regEmail" placeholder="Email" onChange={this.handleEmailChange} value={this.state.registerEmail}/>
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group inpfield">
						<label htmlFor="regPass">Password</label>
						<input type="password" className="form-control" id="regPass" placeholder="Password" onChange={this.handlePassChange} value={this.state.registerPass}/>
					</div>
//					<div className="g-recaptcha" data-sitekey="6LcMDSkUAAAAAExIHJdZEIC7yds56gkyqsJ7bvpb"></div>

					<Recaptcha
						sitekey='6Lf2CykUAAAAAB_oB_wPueIqrIjZq8sdb5ml4ox9'
						verifyCallback={this.handleRecaptcha}
						theme="dark"
					/>

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
