
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import {logout} from './../../helpers.jsx';
import Login from './Login.jsx';
import NewPost from './NewPost.jsx'

class Protected extends React.Component {
	
    constructor () {
        super(); 
				this.state = {  
					isAuthenticated:false  
    		} 	    
    		this.authenticate = this.authenticate.bind(this);
    }
    
    logout() {
      logout()
    	.then(()=>{
    		this.setState({isAuthenticated: false});
    	})
     	
    }
  
    authenticate() {
      this.setState({isAuthenticated: true});
    }
    
    
    
	render() {
	  var authenticated = (
	    <div>
	      <p>Welcome</p>
	      <NewPost />
	      
	      <button onClick={()=>this.logout()}>Logout</button>
      </div>
	    );
	  
	  var not_authenticated = <Login isAuthenticated={this.authenticate} />;
	  
		return (
		<section>
  		{this.state.isAuthenticated === true ? authenticated : not_authenticated }
		</section>
		);
	}
}

export default Protected;

