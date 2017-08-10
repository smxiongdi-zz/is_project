import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMyFriendsProfiles } from '../.././redux/actions/credActions';
import MessagesPage from './MessagesPage.jsx';

const mapStateToProps = state => {
  return ({
		username: state.username,
    title: 'Friends page',
		profile: state.profile,
		myFriendsProfilesObj: state.myFriendsProfilesObj,
    lpmessage: '',
  })
}

const mapDispatchToProps = dispatch => {
  return ({
		fetchMyFriendsProfiles: () => dispatch(fetchMyFriendsProfiles()),
  })
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
export default MessagesContainer;

