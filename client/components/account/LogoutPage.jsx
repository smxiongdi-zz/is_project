import React from 'react';
import Recaptcha from 'react-gcaptcha';

class LogoutPage extends React.Component {

	componentDidMount() {
		this.props.logoutUser();
		setTimeout(() => window.location.href = '/', 5000);
	}

	render () {
		return (
			<div>
				<h2>{this.props.title ? this.props.title : ''}</h2>
				{this.props.message ? this.props.message : ''}
			</div>
		)
	}
}

LogoutPage.propTypes = {
  inputEmail: React.PropTypes.string.isRequired,
  inputPass: React.PropTypes.string.isRequired,
  handlePassChange: React.PropTypes.func,
  handleEmailChange: React.PropTypes.func
}


export default LogoutPage;
