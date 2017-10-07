
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

import Public from './Pages/Public.jsx';
import Protected from './Pages/Protected.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';	
import getMuiTheme from 'material-ui/styles/getMuiTheme';





class Main extends React.Component {
	constructor() {
		super();
  	this.state = {  
  		logged: false  
  	}
	}
	
	render() {
		return (
			<MuiThemeProvider>
				<main>
				
					<Header />
					
					 <Router >
						 <div>
					      <Route path="/public" component={Public}/>
					      <Route path="/protected" component={Protected}/>
						  </div>
					  </Router>
					  
					<Footer />
				</main>
			</MuiThemeProvider>
				);
	}
}

export default Main;
