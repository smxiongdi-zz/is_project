import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import accConfirmPage from './accConfirmPage.jsx';

const mapStateToProps = state => {
  return ({
    title: 'Account confirmation',
		message: 'Thank you for confirming your account',
  })
}

const mapDispatchToProps = dispatch => {}

const accConfirmContainer = connect(mapStateToProps, null)(accConfirmPage);
export default accConfirmContainer;

