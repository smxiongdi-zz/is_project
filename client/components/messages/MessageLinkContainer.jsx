import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MessageLinkComponent from './MessageLinkComponent.jsx';

const mapStateToProps = state => {
  return ({
		profile: state.profile,
		visNative: state.visNative,
		visLearning: state.visLearning,
		visGender: state.visGender,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
  })
}

const MessageLinkContainer = connect(mapStateToProps, null)(MessageLinkComponent);
export default MessageLinkContainer;

