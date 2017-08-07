import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CommunityPage extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}

	componentDidMount() {
		this.props.fetchCommunityList();
	}

	render() {
		return (
			<div>
				<h2>{this.props.title}</h2>
				<ul className="list-group">
				{/* this.props.fetchCommunityList().then((x) => { x.map((y) => <li className="list-group-item member"><Link to={'/p/' + y._id.toString()}>{y.name.toString()}</Link></li>)}) */}
				{ console.log(this.props.commObj) }
				{ this.props.commObj ? this.props.commObj.map((x) =>  <li className = "list-group-item community-member"> <Link to ={'/p/' + x._id}> {x.name + ' Speaks: ' + x.lang_native[0] + ' Learning: ' + x.lang_learning[0] + ' Gender: ' + x.sex } </Link> </li>) : 'no obj' }
				</ul>
			</div>
		)
	}
}


// PRESENTATIONAL COMPONENT

export default CommunityPage;
