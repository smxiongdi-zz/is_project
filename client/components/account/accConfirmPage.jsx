import React from 'react';
import { Route } from 'react-router-dom';
import { confirmMyAccount } from '../.././redux/actions/credActions';

// account confirm component
class accConfirmPage extends React.Component {

	componentDidMount() {
		this.props.dispatch(confirmMyAccount({confUrl: this.props.match.params.user_id}))
	}

	render() {
		return (
			<div className = "confirmationPage">
				<h1 className="display-4">Account Confirmation</h1>
				{this.props.accountMessage ? this.props.accountMessage : ''}
			</div>
		);
	}
}

export default accConfirmPage
