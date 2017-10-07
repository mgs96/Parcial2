
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import Header 	 from 						 './Layout/Header.jsx';
import Footer 	 from							 './Layout/Footer.jsx';
import Aside		 from								'./Layout/Aside.jsx';
import Public    from   						'./Pages/Public.jsx';
import Protected from 					 './Pages/Protected.jsx';

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
				<Router >
					<div>
						<Header />
						
						<Route path="/public" component={Public}/>
		        <Route path="/protected" component={Protected}/>
			        
			      <Footer />
		      </div>
		    </Router>
			</main>
		);
	}
}

export default Main;
