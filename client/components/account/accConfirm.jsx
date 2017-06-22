// react libraries
import React from 'react';
import ReactDOM from 'react-dom';

// components

class App extends React.Component {
	render() {
		return (
			<div className = "App">
				<p>Thank you for confirming your e-mail. Please <a href = '/'>return home</a></p>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
