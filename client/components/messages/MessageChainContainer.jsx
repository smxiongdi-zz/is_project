import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
//import { fetchUserDetails } from '../.././redux/actions/credActions';
import MessageChainPage from './MessageChainPage.jsx';

const mapStateToProps = state => {
  return ({
		username: state.username,
    title: 'Message page',
		profile: state.profile,
		selectedUser: state.selectedUser,
		myMessages: state.myMessages,
		myFriendsProfilesObj: state.myFriendsProfilesObj,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
		dispatch,
  })
}

const MessageChainContainer = connect(mapStateToProps, mapDispatchToProps)(MessageChainPage);
export default MessageChainContainer;

