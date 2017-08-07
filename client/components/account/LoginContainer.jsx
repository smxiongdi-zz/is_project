import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../.././redux/actions/credActions';
import LoginPage from './LoginPage.jsx';

const mapStateToProps = state => {
  return ({
		username: state.username,
    title: 'Login page',
    lpmessage: 'Please log in',
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    accountAction: () => dispatch(loginUser),
		dispatch: dispatch,
  })
}

const LoginContainer = connect(mapStateToProps, null)(LoginPage);
export default LoginContainer;

