
import React from 'react';
import Nav from './Nav.jsx';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
 
class Header extends React.Component {
	
	render() {
		return (
			<div>
				<Nav />
			</div>
		);
	}
}

export default Header;
