import React from 'react';
import { connect } from 'react-redux';
import accConfirmPage from './accConfirmPage.jsx';

const mapStateToProps = state => {
  return ({
    title: 'Account confirmation',
		accountMessage: state.accountMessage,
  })
}

const mapDispatchToProps = dispatch => {}

const accConfirmContainer = connect(mapStateToProps, null)(accConfirmPage);
export default accConfirmContainer;

