
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import Header from './Layout/Header.jsx';
import Footer from './Layout/Footer.jsx';
import Aside from './Layout/Aside.jsx';

class Main extends React.Component {
	constructor(props) {
		super(props);
  	this.state = {  
  		logged: false  
  	}
	}
	
	render() {
		return (
			<main>
				<Header />
				  
				<Footer />
			</main>
		);
	}
}

export default Main;
