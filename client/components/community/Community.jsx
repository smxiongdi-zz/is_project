import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { loadCommunityMembers } from '../.././lib/community/grabCommunity.jsx';

class Community extends React.Component {

	constructor() {
		super()
		this.state = {
			commObj: [] 
		}
	}

	componentDidMount() {
		loadCommunityMembers()
			.then((commObj) => this.setState({commObj: commObj}))
	}

	render() {
		return (
			<div>
				<h2>Community view </h2>
				{ this.state.commObj.map((x) => <div className="member"><Link to={'/p/' + x._id}>{x.name}</Link></div>)}
			</div>
		)
	}
}

export default Community;
