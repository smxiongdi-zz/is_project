import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, browserHistory } from 'react-router';
import App from './App.jsx';

class Root extends React.Component {
	render() {
		return (
			<div className="Root">
				<Router history = {browserHistory}>
					<Switch>
						<Route path ="/" component = { App } />
						<div>hi</div>
					</Switch>
				</Router>
			</div>
		);
	};
};

Root.propTypes = {
	store: PropTypes.object.isRequired,
};

export default Root;
