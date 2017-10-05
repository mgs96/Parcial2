
import React from 'react';
import Nav from './Nav.jsx';
import AppBar from 'material-ui/AppBar';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
 
class Header extends React.Component {
	
	render() {
		return (
			<AppBar title="Title"/>
		);
	}
}

export default Header;
