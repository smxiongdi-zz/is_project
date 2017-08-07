import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchUserDetails } from '../.././redux/actions/credActions';
import UserProfilePage from './UserProfilePage.jsx';

const mapStateToProps = state => {
  return ({
    title: 'User Details page',
		selectedUser: state.selectedUser,
  })
}

const mapDispatchToProps = dispatch => {
  return ({
  })
}

const UserProfileContainer = connect(mapStateToProps, null)(UserProfilePage);
export default UserProfileContainer;

